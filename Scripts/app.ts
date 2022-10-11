//IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSION
//AKA: Slef Executing Function
(function(){
  // function Start(){
  //     console.log("App Started!");
  // }
  function Start(){
      console.log("App Started!"); 
      
      $.getJSON("./Data/information.json", function(DataSource){
         //read the href links from json 
          const linkHome = document.querySelector(".container .nav li:nth-child(1) a") as HTMLAnchorElement | null;
          linkHome.href=DataSource.NavLinks.Home;

          const linkAbout = document.querySelector(".container .nav li:nth-child(2) a") as HTMLAnchorElement | null;
          linkAbout.href=DataSource.NavLinks.About;

          const linkProject = document.querySelector(".container .nav li:nth-child(3) a") as HTMLAnchorElement | null;
          linkProject.href=DataSource.NavLinks.Projects;

          const linkService = document.querySelector(".container .nav li:nth-child(4) a") as HTMLAnchorElement | null;
          linkService.href=DataSource.NavLinks.Services;

          const linkContact = document.querySelector(".container .nav li:nth-child(5) a") as HTMLAnchorElement | null;
          linkContact.href=DataSource.NavLinks.Contact; 

          $(".container .nav a:first").text(DataSource.Navigation.Home);         
          $(".container .nav li:nth-child(2) a").text(DataSource.Navigation.AboutMe);
          $(".container .nav li:nth-child(3) a").text(DataSource.Navigation.Projects);
          $(".container .nav li:nth-child(4) a").text(DataSource.Navigation.Services);
          $(".container .nav li:nth-child(5) a").text(DataSource.Navigation.Contact);

          $(".container .logo img").attr("src",DataSource.Assets.Logo);
          $(".container .pic img").attr("src",DataSource.Assets.MyPic );

          $(".contact h4").text(DataSource.Contact.Title);
          $(".contact ul li:nth-child(1)").text(DataSource.Contact.Name);
          $(".contact ul li:nth-child(2)").text(DataSource.Contact.Web);
          $(".contact ul li:nth-child(3)").text(DataSource.Contact.Tel);
          $(".contact ul li:nth-child(4)").text(DataSource.Contact.Email);
          $(".contact ul li:nth-child(5)").text(DataSource.Contact.Adrs);


          

          // https://www.youtube.com/watch?v=JkuiKeNS2mg
          let activePage = window.location.pathname;
          // console.log(activePage);
          if (activePage == "/") {
              activePage = "/index.html";
              // console.log(activePage);
          } 
          switch(activePage)
           {
              case "/index.html":
                $(".container .nav a:first").addClass("active");
                $(".content.home").append(DataSource.HomePage.Heading1);
                $(".content.home").append(DataSource.HomePage.Paragraph1);
                $(".content.home").append(DataSource.HomePage.Heading2);
                $(".content.home").append(DataSource.HomePage.Paragraph2);
                $(".content.home").append(DataSource.HomePage.Heading3);
                $(".content.home").append(DataSource.HomePage.Paragraph3);
                $(".content.home").append(DataSource.HomePage.Heading4);
                $(".content.home").append(DataSource.HomePage.Paragraph4);
              break;
              case "/aboutme.html":
                $(".container .nav li:nth-child(2) a").addClass("active");
                $(".content.aboutme h1").text(DataSource.AboutMe.Heading1);
                $(".content.aboutme>p").text(DataSource.AboutMe.Paragraph);
                $(".content.aboutme .skill-container>h2").append(DataSource.AboutMe.Heading2);
              break;
              case "/projects.html":
                $(".container .nav li:nth-child(3) a").addClass("active");
                $(".content.projects h1").text(DataSource.Projects.Heading1);
                $(".content.projects>p").text(DataSource.Projects.Paragraph1);
              
                document.querySelector(".projects #project2 .card-title").innerHTML=DataSource.Projects.Samples[0].Title1;
                document.querySelector(".projects #project1 .card-title").innerHTML=DataSource.Projects.Samples[0].Title2;
                document.querySelector(".projects #project3 .card-title").innerHTML=DataSource.Projects.Samples[0].Title3;
                document.querySelector(".projects #project2 .card-text").innerHTML=DataSource.Projects.Samples[1].Text1;
                document.querySelector(".projects #project1 .card-text").innerHTML=DataSource.Projects.Samples[1].Text2;
                document.querySelector(".projects #project3 .card-text").innerHTML=DataSource.Projects.Samples[1].Text3;

                // document.querySelector(".projects #project1 a").href=DataSource.Projects.Samples[1].Src1;
                const link1 = document.querySelector(".projects #project1 a") as HTMLAnchorElement | null;
                const link2 = document.querySelector(".projects #project2 a") as HTMLAnchorElement | null;
                const link3 = document.querySelector(".projects #project3 a") as HTMLAnchorElement | null;
                    link1.href = DataSource.Projects.Samples[2].Src2;
                    link2.href = DataSource.Projects.Samples[2].Src1;
                    link3.href = DataSource.Projects.Samples[2].Src3;
              break;
              case "/services.html":
                $(".container .nav li:nth-child(4) a").addClass("active");
                $(".content h1").text(DataSource.Services.Title);
                $(".content>p").text(DataSource.Services.Paragraph);
                $(".content #cat1 .bg-light").text(DataSource.Services.Categories[0].Cat1);
                $(".content #cat2 .bg-light").text(DataSource.Services.Categories[0].Cat2);
                $(".content #cat3 .bg-light").text(DataSource.Services.Categories[0].Cat3);
                $(".content #cat4 .bg-light").text(DataSource.Services.Categories[0].Cat4);
                $(".content #cat1 p").text(DataSource.Services.Categories[1].ExpCat1);
                $(".content #cat2 p").text(DataSource.Services.Categories[1].ExpCat2);
                $(".content #cat3 p").text(DataSource.Services.Categories[1].ExpCat3);
                $(".content #cat4 p").text(DataSource.Services.Categories[1].ExpCat4);

              break;
              case "/contact.html":
                $(".container .nav li:nth-child(5) a").addClass("active");
              break;
           }
           $(".footer small").text(DataSource.Footer.Copyright);
          $(".footer .logo img").attr("src",DataSource.Assets.Logo);
          })
       // });
      
  }
  window.addEventListener("load",Start);
})();


