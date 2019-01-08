using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using TestLoginDemo.Models;



namespace TestLoginDemo.Controllers
{
    public class UserController : Controller
    {

        //Registeration Action
        [HttpGet]
        public ActionResult Registeration()
        {
            return View();
        }

        //Registeration POST Action
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Registeration([Bind(Exclude = "IsEmailVerified,ActivationCode")]User user)
        {
            bool Status = false;
            string Message = "";

            // Model Validation
            if (ModelState.IsValid)
            {
                #region //Email already exists
                var isExist = IsEmailExist(user.EmailID);
                if(isExist)
                {
                    ModelState.AddModelError("EmailExist", "Email already Exists");
                    return View(user);
                }
                #endregion

                #region //Generate Activation Code 

                user.ActivationCode = Guid.NewGuid();
                #endregion

                #region //Password Hashing 

                user.Password = Crypto.Hash(user.Password);
                user.ConfirmPassword = Crypto.Hash(user.ConfirmPassword);
                #endregion

                // user.IsEmailVerified = false;
                user.IsEmailVerified = true;

                #region  //Save data to Database
                using (LoginDatabaseEntities db = new LoginDatabaseEntities())
                {
                    db.Users.Add(user);
                    db.SaveChanges();

                    //Send Email to User
                  //  SendVerificationLinkEmail(user.EmailID, user.ActivationCode.ToString());
                }
                #endregion

                Message = "Registeration successfully done. Account activation link " +
                    "has been sent to your Email Address:" + user.EmailID;
                Status = true;
            }

            else
            {
                Message = "Invalid Request";
            }

            ViewBag.Message = Message;
            ViewBag.Status = Status;
            return View(user);
        }


      /*  public ActionResult VerifyAccount(string id)
        {
            bool Status = false;
            using (LoginDatabaseEntities db = new LoginDatabaseEntities())
            {
                db.Configuration.ValidateOnSaveEnabled = false; // this line to avoid confirm password don't match issue
                var v = db.Users.Where(x => x.ActivationCode == new Guid(id)).FirstOrDefault();// new Guid just to cast id to type Guid
                if(v != null)
                {
                    v.IsEmailVerified = true;
                    db.SaveChanges();
                    Status = true;
                }
                else
                {
                    ViewBag.Message = "Invalid Request";
                }
                ViewBag.Status = Status;
                return View();
            }
        }*/

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(UserLogin userLogin, string ReturnUrl = "")
        {
            string Message = "";
           
            
            using (LoginDatabaseEntities db = new LoginDatabaseEntities())
            {
               
                var v = db.Users.Where(x => x.EmailID == userLogin.EmailId).FirstOrDefault();
                if(v != null)
                {
                    if (string.Compare(Crypto.Hash(userLogin.Password), v.Password) == 0)
                    {

                       // setRecords(v);
                        // check if rememberMe option is true then set the timout to one year long
                        // otherwise(if the rememberMe option was not selected then set the timeout to 20 minutes.
                        int timeout = userLogin.RememberME ? 525600 : 20; // 525600 minutes = 1 year

                        
                        var ticket = new FormsAuthenticationTicket(v.FirstName , userLogin.RememberME, timeout); // this is to save to http.context.user.identity.name (instead of email I show 1st & last name)
                        string encrypted = FormsAuthentication.Encrypt(ticket);
                        var cookie = new HttpCookie(FormsAuthentication.FormsCookieName, encrypted);
                        cookie.Expires = DateTime.Now.AddMinutes(timeout);
                        cookie.HttpOnly = true;
                        Response.Cookies.Add(cookie);

                        if (Url.IsLocalUrl(ReturnUrl)) // it is to make sure that the returnUrl belong to the same website for our 
                        {                             //web applicaation so if the returnUrl is a local url we direct the user to it
                         
                           return Redirect(ReturnUrl); // if it is external we direct the user to the index page.
                                                        // that's helpful to prevent redirction hack attacks.
                        }
                        else
                        {
                           
                            return RedirectToAction("UserProfile", "User",v);
                           // return RedirectToAction("Index", "Home");
                        }

                    }
                    else
                    {
                        Message = "Invalid Credintials provided";
                    }
                }
                else
                {
                    Message = "Invalid Credintials provided";
                }
            }
            
           
            ViewBag.Message = Message;
            return View();
        }
        
        //***************************************************** My Addition **************************************
        [HttpGet]
        public ActionResult UserProfile(UserLogin userLogin)
        {
            
            using (LoginDatabaseEntities db = new LoginDatabaseEntities())
            {

                User v = db.Users.Where(x => x.EmailID == userLogin.EmailId).FirstOrDefault();
                if (v != null)
                {
                    return View(v);
                }
                   
            }
            return View();
              
        }

        //*************************************************************************************************************
        [Authorize]
        [HttpPost]
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "User");
        }
        [NonAction]
        public bool IsEmailExist(string emailID)
        {

            using (UserContext db = new UserContext())
            {
                var v = db.Users.Where(x => x.EmailID == emailID).FirstOrDefault();
                return v != null;
            }
        }

        [NonAction]
        public void SendVerificationLinkEmail(string email, string activationCode)
        {
            var verifyUrl = "/User/VerifyAccount/" + activationCode;
            var link = Request.Url.AbsoluteUri.Replace(Request.Url.PathAndQuery, verifyUrl);

            var fromEmail = new MailAddress("blawa3i@gmail.com", "Smart Everyday");
            var toEmail = new MailAddress(email);
            var fromEmailPassword = "mhmadallan2241998";

            string subject = "Your Account is Successfully created";

            string body = "<b/r><br/> We are delighted to tell you that your SmartEveryday account is" +
                " successfully created. Please click on the link below to verify your account" +
                "<br/><br/><a href='" + link + "'>" + link + "</a>";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromEmail.Address, fromEmailPassword)
            };

            using (var message = new MailMessage(fromEmail, toEmail)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true

            })
                smtp.Send(message);


        }

      /*  [NonAction]
        public double setRecords(User user)
        {
            double totalUsage;
            using (LoginDatabaseEntities db = new LoginDatabaseEntities())
            {
                double [] weeklyUsage = new double[52];
                var v = db.recTables.Where(x => x.User == user).FirstOrDefault();
                double f = (double) v.usagePerHour;
                DateTime begin = (DateTime)v.startDate;
                int hours = DateTime.Now.Subtract(begin).Hours + DateTime.Now.Subtract(begin).Days * 24;
                totalUsage = hours * f;
                for(int i = 0; i < 52; i++)
                {
                    if(hours % (7 * 24) == 0)
                    {
                        weeklyUsage[i] = totalUsage;
                    }
                }
            }
            return totalUsage;
        }*/

    }
}

/*<div class="admin-logo">
                       <a href = "#" >
                          // <img src="@Url.Content("~/Content/")img/logo/log.png" alt="" />
                        </a>
   
                 </div>
                 
     //this is in the 2nd box (limits) the last line
     <div class="price-graph">
                                <span id="sparkline6"></span>
                            </div>
                            <span class="income-percentange">66% <i class="fa fa-level-up"></i></span>
     */


/*
 * <div class="daily-feed-list">
                        <div class="daily-feed-img">
                            <img src="@Url.Content("~/Content/")img/icons8-phone-32.png" alt="" style="width:50%; height: 50%; position:relative; bottom:6px" />
                        </div>
                        <div class="daily-feed-content">
                            <h4>@Model.DateOfBirth </h4>

                        </div>
                    </div>
 * */
