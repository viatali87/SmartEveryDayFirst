(function ($) {
 "use strict";

 
		
		/*-----------------------------
			Menu Stick
		---------------------------------*/
		$(".sicker-menu").sticky({topSpacing:0});
		
		$(document).on('click', '.header-right-menu .dropdown-menu', function (e) {
			  e.stopPropagation();
			});
		
    $(window).on("load", function () {

        /*-------------------------------- 
         * set limits box
         * ---------------------------------*/
        var rec = $('#recorder-length-title');
        rec.click(function () {
            switch (rec.text()) {
                case "Weekly":
                    rec.text("Monthly");
                    break;
                case "Monthly":
                    rec.text("Weekly");
                    break;
            }

        });
        $("#setLimit").keypress(function (e) {
            if (e.which == 13) {
                var va = $("#setLimit").val();
                console.log(va);
                $("#newLimit").text(va);
            }
          
        });

        $("#setLimit").focusout(function (e) {
            $("#setLimit").val("");
            console.log($("#setLimit").val());
        });

		/*--------------------------
		 mCustomScrollbar
		---------------------------- */
       
       
				$(".message-menu, .notification-menu, .comment-scrollbar, .notes-menu-scrollbar, .project-st-menu-scrollbar").mCustomScrollbar({
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
					
				});
				$(".timeline-scrollbar").mCustomScrollbar({
					setHeight:636,
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
					
				});
				$(".project-list-scrollbar").mCustomScrollbar({
					setHeight:636,
					theme:"light-2"
				});
				$(".messages-scrollbar").mCustomScrollbar({
					setHeight:503,
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
				});
				$(".chat-scrollbar").mCustomScrollbar({
					setHeight:250,
					theme:"light-2"
				});
				$(".widgets-chat-scrollbar").mCustomScrollbar({
					setHeight:335,
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
				});
				$(".widgets-todo-scrollbar").mCustomScrollbar({
					setHeight:322,
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
				});
				$(".user-profile-scrollbar").mCustomScrollbar({
					setHeight:1820,
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
                });

                replace();
                chart2color();
			});


    // My 2nd Chart Stuff

    
			
			/*----------------------------
		 jQuery MeanMenu
		------------------------------ */
		jQuery('nav#dropdown').meanmenu();	
		
		// Collapse Chat function
			$('.chat-icon-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-comments').toggleClass('fa-remove');
			});
		// Collapse ibox function
			$('.collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline-content" ).slideToggle( "slow" );
			});
			$(".collapse-close").on('click', function(){
				$( "div.about-sparkline" ).fadeOut( 600 );
			});

		// Collapse ibox function
			$('.smart-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".smart-sparkline-list" ).slideToggle( "slow" );
			});
			$(".smart-collapse-close").on('click', function(){
				$( "div.sparkline-list" ).fadeOut( 600 );
			});


		// Collapse ibox function
			$('.sparkline7-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline7-graph" ).slideToggle( "slow" );
			});
			$(".sparkline7-collapse-close").on('click', function(){
				$( "div.sparkline7-list" ).fadeOut( 600 );
			});
		// Collapse ibox function
			$('.sparkline8-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline8-graph" ).slideToggle( "slow" );
			});
			$(".sparkline8-collapse-close").on('click', function(){
				$( "div.sparkline8-list" ).fadeOut( 600 );
			});


		// Collapse ibox function
			$('.sparkline9-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline9-graph" ).slideToggle( "slow" );
			});
			$(".sparkline9-collapse-close").on('click', function(){
				$( "div.sparkline9-list" ).fadeOut( 600 );
			});
			
		// Collapse ibox function
			$('.sparkline10-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline10-graph" ).slideToggle( "slow" );
			});
			$(".sparkline10-collapse-close").on('click', function(){
				$( "div.sparkline10-list" ).fadeOut( 600 );
			});
		// Collapse ibox function
			$('.sparkline11-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline11-graph" ).slideToggle( "slow" );
			});
			$(".sparkline11-collapse-close").on('click', function(){
				$( "div.sparkline11-list" ).fadeOut( 600 );
			});
			
			
		// Collapse ibox function
			$('.sparkline12-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline12-graph" ).slideToggle( "slow" );
			});
			$(".sparkline12-collapse-close").on('click', function(){
				$( "div.sparkline12-list" ).fadeOut( 600 );
			});
 
		// Collapse ibox function
			$('.sparkline13-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline13-graph" ).slideToggle( "slow" );
			});
			$(".sparkline13-collapse-close").on('click', function(){
				$( "div.sparkline13-list" ).fadeOut( 600 );
			});
 
		// Collapse ibox function
			$('.sparkline14-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline14-graph" ).slideToggle( "slow" );
			});
			$(".sparkline14-collapse-close").on('click', function(){
				$( "div.sparkline14-list" ).fadeOut( 600 );
			});
 
		// Collapse ibox function
			$('.sparkline15-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline15-graph" ).slideToggle( "slow" );
			});
			$(".sparkline15-collapse-close").on('click', function(){
				$( "div.sparkline15-list" ).fadeOut( 600 );
			});
 
		// Collapse ibox function
			$('.sparkline16-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline16-graph" ).slideToggle( "slow" );
			});
			$(".sparkline16-collapse-close").on('click', function(){
				$( "div.sparkline16-list" ).fadeOut( 600 );
			});
 

    // My chart JS here ***************************
    function sliceSize(dataNum, dataTotal) {
        return (dataNum / dataTotal) * 360;
    }

    function addText() {
        $(".s1-0 span").text("fiiiiiiiiiiiiiiiii");
    }

    function addSlice(sliceSize, pieElement, offset, sliceID, color) {
        $(pieElement).append("<div class='slice " + sliceID + "'><span></span></div>");
        var offset = offset - 1;
        var sizeRotation = -179 + sliceSize;
        $("." + sliceID).css({
            "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
            
        });
        $("." + sliceID + " span").css({
            "transform": "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
            "background-color": color
           
          
        });

        addText();
       
    }
   
    function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
        var sliceID = "s" + dataCount + "-" + sliceCount;
        var maxSize = 179;
        if (sliceSize <= maxSize) {
            addSlice(sliceSize, pieElement, offset, sliceID, color);
        } else {
            addSlice(maxSize, pieElement, offset, sliceID, color);
            iterateSlices(sliceSize - maxSize, pieElement, offset + maxSize, dataCount, sliceCount + 1, color);
        }
    }
    function createPie(dataElement, pieElement) {
        var listData = [];
        $(dataElement + " span").each(function () {
            listData.push(Number($(this).html()));
        });
        var listTotal = 0;
        for (var i = 0; i < listData.length; i++) {
            listTotal += listData[i];
        }
        var offset = 0;
        var color = [
            "cornflowerblue", // the first two colors only used the rest just exist without doing anything
            "tomato",
            "gray",
            "crimson",
            "olivedrab",
            
            "orange",
            "purple",
            "turquoise",
            "forestgreen",
            "navy"
            
        ];
        for (var i = 0; i < listData.length; i++) {
            var size = sliceSize(listData[i], listTotal);
            iterateSlices(size, pieElement, offset, i, 0, color[i]);
            $(dataElement + " li:nth-child(" + (i + 1) + ")").css("border-color", color[i]);
            offset += size;
        }
    }
    createPie(".pieID.legend", ".pieID.pie");

   // My Changes 

    function calc1(wr) {
        wr = document.getElementById("water-remained").innerHTML;
        var per = (wr * 100) / 1000;
        return per;
    }

    function calc2(wu) {
        wu = document.getElementById("water-used").innerHTML;
        var per = (wu * 100) / 1000;
        return per;
    }

    function replace() {
        document.getElementById("water-used").innerHTML = calc2() + " %";
        document.getElementById("water-remained").innerHTML = calc1() + " %";


    }

    var mon, tue, wed, thu, fri, sat, sun;
    mon = 200;
    tue = 149;
    wed = 241;
    thu = 136;
    fri = 260;
    sat = 120;
    sun = 210;

    var days1 = [mon, tue, wed, thu, fri, sat, sun];

    $("#mon1").css({
        "height": mon
        
    });
     $("#mon7").css({
        "height": sun
    });
     $("#mon2").css({
        "height": tue
    });
     $("#mon3").css({
        "height": wed
    });
     $("#mon4").css({
         "height": thu
    });
     $("#mon5").css({
        "height": fri
    });
     $("#mon6").css({
        "height": sat
    });
    var d1, d2, d3, d4, d5, d6, d7;
    d1 = $("#mon1"); d2 = $("#mon2"); d3 = $("#mon3"); d4 = $("#mon4"); d5 = $("#mon5"); d6 = $("#mon6"); d7 = $("#mon7"); 
    var week1 = [d1,d2,d3 ,d4 , d5,d6,d7 ];
   
    function chart2color() {

        for (var i = 0; i < week1.length; i++) {

           
                week1[i].css({

                    "background-color": "#a3a3c2"
                });
           
           
        }
       
    }

    function changeText() {
        $('#recorder-length-title').innerHTML = "Weekly";
        console.log("11");
    }

   
                        
})(jQuery); 

