//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TestLoginDemo.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class recTable
    {
        public int userId { get; set; }
        public Nullable<System.DateTime> startDate { get; set; }
        public Nullable<double> usagePerHour { get; set; }
    
        public virtual User User { get; set; }
    }
}
