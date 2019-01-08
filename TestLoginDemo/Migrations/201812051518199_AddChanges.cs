namespace TestLoginDemo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddChanges : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.User", "DateOfBirth");
        }
        
        public override void Down()
        {
            AddColumn("dbo.User", "DateOfBirth", c => c.DateTime());
        }
    }
}
