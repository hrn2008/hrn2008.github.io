"use strict";
//IIFE
    (function(){
        function Start(){
            console.log("App Started!");
            $(".container .nav a:first").text("Home");
            $(".container .nav li:nth-child(2) a").text("About Me");
            $(".container .nav li:nth-child(3) a").text("Projects Page");
            $(".container .nav li:nth-child(4) a").text("Services Page");
            $(".container .nav li:nth-child(5) a").text("Contact Me");
            $(".container .logo img").attr("src","/Assets/logo.png");
            $(".container .pic img").attr("src", "/Assets/me.jpg");
            
        
           appendContact();
           appendFooter();
        }
        window.addEventListener("load",Start);
    })();

    function appendContents(content)
    {
        $(".content").append(content);
    }
    
    function appendContact()
    {
        let contact=`
        <h5>Information Details</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">🤵 Hamidreza Naji</li>
                <li class="list-group-item">💻 Web Designer & Developer</li>
                <li class="list-group-item">☎ +17057702750</li>
                <li class="list-group-item">📧 HRN2008@yahoo.com</li>
                <li class="list-group-item">🏡 Barrie, Ontario, Canada</li>
            </ul>`;

        $(".contact").append(contact);
    }
    function appendFooter()
    {
        let footer=`
        <small>© 2022 | Hamidreza Naji | 200305068</small>
            <div class="logo">
                <img src="/Assets/logo.png" alt="logo"/>
            </div>`;
        $(".footer").append(footer);    
    }



// https://www.youtube.com/watch?v=JkuiKeNS2mg
let activePage = window.location.pathname;
// console.log(activePage);
if (activePage == "/") {
    activePage = "/index.html";
    // console.log(activePage);
} else {
    activePage = window.location.pathname;
}


let content;
switch(activePage) {
    case "/aboutme.html":
      content=`<h1>About me</h1>
      <p>My name is Hamidreza Naji and I am an international student at Georgen College at this time. I am a software engineering graduate from Iran and it has been for a long time ago. After working in Iran for some time, I decided to come to Canada to update my skills and study Interactive Media and Web Design. I am currently working as a freelancer and I prefer to spend most of my time studying. I was working in Iran in the field of web design and used WordPress and Joomla to web design and development. In the summer of 2022, I worked in the same field at TCCO Company and passed my Co-op. I am trying to update  HTML5, CSS3, JavaScript , jQuery, TypeScript and React Knowledge for front-end aspect and PHP, .NET for back-end.I am a self-starter, self-learner, and enthusiastic to tackle new programming strategies and software.</p>

      <div class="skill-container">
          <h2>My Skills</h2>
          <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 95%"
                  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="small">HTML5</p>
  
          <div class="progress">
              <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                  style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="small">CSS3</p>
  
          <div class="progress">
              <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar"
                  style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="small">JavaScript</p>
  
          <div class="progress">
              <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar"
                  style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="small">PHP</p>
  
          <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 40%"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="small">ASP.NET CORE</p>
  
          <div class="progress">
              <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar"
                  style="width: 93%" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="small">WordPress</p>
      </div>`;
      break;
    case "/services.html":
      content=`<h1>Services</h1>
      <p>My best effort is to deliver every project in the best quality and on time and I know that time and quality are the most important factors of every project. My services are divided into "Web Design & Development, Digital Marketing, Graphic Design, and Search Engine Optimisation" categories.</p>

      <div class="row g-2">
        <div class="col-6">
          <div class="p-3 border bg-light">WEB DESIGN & DEVELOPMENT</div>
          <P>If you need a Shopping store website, Business Company website, Personal, etc., you can completely count on me. The design and development of your website will be with the most up-to-date technology and applicable on any platform. Support and training are free for up to 3 months.</P>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">DIGITAL MARKETING</div>
          <P>I provide in-depth solutions for every need. My planning always starts with in-depth keyword research, followed by cost-effective SEM and PPC strategies that capture leads, improve your reach, and maximize your campaign’s performance.</P>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">GRAPHIC DESGIN</div>
          <P>By mastering Photoshop and Illustrator, any idea you have in your mind can be designed. This includes logos, banners, advertisements and any other designs. </P>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Search Engine Optimization</div>
          <P>It is the process used to optimize a website's technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries, and as a consequence, search engines rank them better.</P>
        </div>
      </div>`;
      break;
    case "/projects.html":       
        content=`<h1>Projects</h1>
        <p>On this page, you can see examples of my works, most of which were done in Iran. Some of them are project-oriented in Canada. The projects that are with CMS are done with WordPress and Joomla, and the rest are completely programmed in the front-end and back-end.</p>
        <h2>Samples:</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <a href="https://www.w3schools.com/w3images/lights.jpg">
                <img src="https://www.w3schools.com/w3images/lights.jpg" class="card-img-top" alt="Lights" style="width:100%">
              </a>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <a href="https://www.w3schools.com/w3images/lights.jpg">
                <img src="https://www.w3schools.com/w3images/lights.jpg" class="card-img-top" alt="Lights" style="width:100%">
              </a>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <a href="https://www.w3schools.com/w3images/lights.jpg">
                <img src="https://www.w3schools.com/w3images/lights.jpg" class="card-img-top" alt="Lights" style="width:100%">
              </a>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.</p>
              </div>
            </div>
          </div>                
        </div>`;
        break;
    case "/index.html":
     content = `<h1> Welcome To My Page</h1> <p>A junior web developer with more than two years of work experiences. I have been working with HTML, CSS,
        JavaScript, JQuery, SQL, and MySQL databases. I have a great knowledge of PHP, Bootstrap, and CMS such as WordPress, and Joomla. I am a self-starter, self-learner, and enthusiastic to
        tackle new programing strategies and software.<a href="/aboutme.html">Read More...</a></p>            
        <h4>Projects</h4>
        <p>
        You can see some examples of my work in <a href="/projects.html">Projects page</a>. Most of them are designed and developed with WordPress CMS (include of HTML, CSS, JS), and some are examples of academic projects.
        </p>
        <h4>Services</h4>
        <p>
        As a web designer and programmer, I can provide services and support them well. You can always contact me during the project to know about the progress of the project. For more details please take a look at my services on the <a href="/services.html">Service page</a>.
        </p>
        <h4>Contact me</h4>
        <p>To contact me, you can send your message through the form on the <a href="/contact.html">Contact page</a> and I will respond as soon as possible.</p>`;
        break;
  } 
  appendContents(content);

const navlinks = document.querySelectorAll('.nav a').forEach(link => {
    // console.log(link.href);
    if (link.href.includes(`${activePage}`)) {
        // console.log(`${activePage}`);
        link.classList.add('active');
    }
})

