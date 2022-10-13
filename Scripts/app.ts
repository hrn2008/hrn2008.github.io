"use strict";
(function(){
  function Start(){
      console.log("App Started!"); 
      //connecting and reading data from json
      $.getJSON("./Data/information.json", function(DataSource){
         //select the querry of href links by HTMLAnchorElement- I faced error by getting href directly
         //read the links address from json and put them in html page
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

          //read the text of navigations from json and put them in html page
          $(".container .nav a:first").text(DataSource.Navigation.Home);         
          $(".container .nav li:nth-child(2) a").text(DataSource.Navigation.AboutMe);
          $(".container .nav li:nth-child(3) a").text(DataSource.Navigation.Projects);
          $(".container .nav li:nth-child(4) a").text(DataSource.Navigation.Services);
          $(".container .nav li:nth-child(5) a").text(DataSource.Navigation.Contact);

          //read the log and my images address and put the them in src attribute
          $(".container .logo img").attr("src",DataSource.Assets.Logo);
          $(".container .pic img").attr("src",DataSource.Assets.MyPic );

          //all data in contact section come from json
          $(".contact h4").text(DataSource.Contact.Title);
          $(".contact ul li:nth-child(1)").append(DataSource.Contact.Name);
          $(".contact ul li:nth-child(2)").append(DataSource.Contact.Web);
          $(".contact ul li:nth-child(3)").append(DataSource.Contact.Tel);
          $(".contact ul li:nth-child(4)").append(DataSource.Contact.Email);
          $(".contact ul li:nth-child(5)").append(DataSource.Contact.Adrs);          

          //I used this command to get the active page  
          // refrence: https://www.youtube.com/watch?v=JkuiKeNS2mg
          let activePage = window.location.pathname;
          // console.log(activePage);
          if (activePage == "/") {
              activePage = "/index.html";
          } 
          //reading data of content from json for all pages
        switch (activePage) {
          case "/index.html":
            //the active class for navigation added in first of each case
            $(".container .nav a:first").addClass("active");
            $(".content.home h1").text(DataSource.HomePage.Heading1);
            $(".content.home p#bio").append(DataSource.HomePage.Paragraph1);
            $(".content.home h4#proj").text(DataSource.HomePage.Heading2);
            $(".content.home p#proj-p").append(DataSource.HomePage.Paragraph2);
            $(".content.home h4#serv").text(DataSource.HomePage.Heading3);
            $(".content.home p#serv-p").append(DataSource.HomePage.Paragraph3);
            $(".content.home h4#cnct").text(DataSource.HomePage.Heading4);
            $(".content.home p#cnct-p").append(DataSource.HomePage.Paragraph4);
            break; //index
          case "/aboutme.html":
            $(".container .nav li:nth-child(2) a").addClass("active");
            $(".content.aboutme h1").text(DataSource.AboutMe.Heading1);
            $(".content.aboutme>p").text(DataSource.AboutMe.Paragraph);
            $(".content.aboutme .skill-container>h2").append(DataSource.AboutMe.Heading2);
            break; //aboutme
          case "/projects.html":
            $(".container .nav li:nth-child(3) a").addClass("active");
            $(".content.projects h1").text(DataSource.Projects.Heading1);
            $(".content.projects>p").text(DataSource.Projects.Paragraph1);
            //i used javaScript selectors in here
            document.querySelector(".projects #project2 .card-title").innerHTML = DataSource.Projects.Samples[0].Title1;
            document.querySelector(".projects #project1 .card-title").innerHTML = DataSource.Projects.Samples[0].Title2;
            document.querySelector(".projects #project3 .card-title").innerHTML = DataSource.Projects.Samples[0].Title3;
            document.querySelector(".projects #project2 .card-text").innerHTML = DataSource.Projects.Samples[1].Text1;
            document.querySelector(".projects #project1 .card-text").innerHTML = DataSource.Projects.Samples[1].Text2;
            document.querySelector(".projects #project3 .card-text").innerHTML = DataSource.Projects.Samples[1].Text3;
            // I faced error in ts by using this command: document.querySelector(".projects #project1 a").href=DataSource.Projects.Samples[1].Src1; - so I used HTMLAnchorElement or null
            const link1 = document.querySelector(".projects #project1 a") as HTMLAnchorElement | null;
            const link2 = document.querySelector(".projects #project2 a") as HTMLAnchorElement | null;
            const link3 = document.querySelector(".projects #project3 a") as HTMLAnchorElement | null;
            link1.href = DataSource.Projects.Samples[2].Src2;
            link2.href = DataSource.Projects.Samples[2].Src1;
            link3.href = DataSource.Projects.Samples[2].Src3;
            $(".projects #project1 img").attr("src",DataSource.Projects.Samples[3].Thumb1);
            $(".projects #project2 img").attr("src",DataSource.Projects.Samples[3].Thumb2);
            $(".projects #project3 img").attr("src",DataSource.Projects.Samples[3].Thumb3);

            break; //projects
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
            break; //services
          case "/contact.html":
            $(".container .nav li:nth-child(5) a").addClass("active");
            $(".content.contactPage h1").text(DataSource.ContactPage.Title);
            $(".content.contactPage p").text(DataSource.ContactPage.Paragraph);
            $(".content.contactPage #name .col:nth-child(1) label").text(DataSource.ContactPage.Fname);
            $(".content.contactPage #name .col:nth-child(2) label").text(DataSource.ContactPage.Lname);
            $(".content.contactPage #emailandPhone .col:nth-child(1) label").text(DataSource.ContactPage.Email);
            $(".content.contactPage #emailandPhone .col:nth-child(2) label").text(DataSource.ContactPage.Phone);
            $(".content.contactPage #comments .col label").text(DataSource.ContactPage.Comments);
            //select the form and elemetns if we want to use validation in js. I already used bootsrap , so I comment here
            // const form: HTMLFormElement = document.querySelector('#contactForm');
            // form.onsubmit = () => {
            //   const formData = new FormData(form);
            //   const Fname = formData.get('inputFName') as string;
            //   const Lname = formData.get('inputLName') as string;
            //...};
            break; //contact
        }
        //footer text and image come from json
        $(".footer small").text(DataSource.Footer.Copyright);
        $(".footer .logo img").attr("src", DataSource.Assets.Logo);
      })      
  }
    window.addEventListener("load",Start); 
})();


