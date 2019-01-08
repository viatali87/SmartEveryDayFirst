using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace TestLoginDemo
{
    public class JsonTest
    {
        public void LoadJson()
        {
            using (StreamReader r = new StreamReader("C:\\Users\\muhammad\\Desktop\\Json Files\\WaterUsageRecords.json")) 
            {
                string json = r.ReadToEnd();
                List<Item> items = JsonConvert.DeserializeObject<List<Item>>(json);
            }
        }

        public class Item
         {
             public int userId;
             public int hoursSubscribed;
             public float usagePerHour;

            
             
         }
        
    }

}

/*
  <!--  <div class="form-group">
          @Html.LabelFor(model => model.DateOfBirth, htmlAttributes: new { @class = "control-label col-md-2" })
          <div class="col-md-10">
              @Html.EditorFor(model => model.DateOfBirth, new { htmlAttributes = new { @class = "form-control" } })
              @Html.ValidationMessageFor(model => model.DateOfBirth, "", new { @class = "text-danger" })
          </div>
      </div>  -->
     
     */
