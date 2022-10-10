//IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSION
//AKA: Slef Executing Function
(function () {
    // function Start(){
    //     console.log("App Started!");
    // }
    function Start() {
        console.log("App Started!");
        $.getJSON("./Data/information.json", function (DataSource) {
            // console.log(DataSource.HomePage[0].Heading1);
            $(".container .logo img").attr("src", DataSource.Assets.Logo);
            $(".container .pic img").attr("src", DataSource.Assets.MyPic);
            $(".contact").append(DataSource.Contact.Text);
            $(".container .nav a:first").text(DataSource.Navigation.Home);
            $(".container .nav li:nth-child(3) a").text(DataSource.Navigation.AboutMe);
            $(".container .nav li:nth-child(4) a").text(DataSource.Navigation.Projects);
            $(".container .nav li:nth-child(5) a").text(DataSource.Navigation.Services);
            $(".container .nav li:nth-child(2) a").text(DataSource.Navigation.Contact);
            // https://www.youtube.com/watch?v=JkuiKeNS2mg
            let activePage = window.location.pathname;
            // console.log(activePage);
            if (activePage == "/") {
                activePage = "/index.html";
                // console.log(activePage);
            }
            else {
                activePage = window.location.pathname;
            }
            switch (activePage) {
                case "/index.html":
                    $(".content.home").append(DataSource.HomePage.Heading1);
                    $(".content.home").append(DataSource.HomePage.Paragraph1);
                    $(".content.home").append(DataSource.HomePage.Heading2);
                    $(".content.home").append(DataSource.HomePage.Paragraph2);
                    $(".content.home").append(DataSource.HomePage.Heading3);
                    $(".content.home").append(DataSource.HomePage.Paragraph3);
                    $(".content.home").append(DataSource.HomePage.Heading4);
                    $(".content.home").append(DataSource.HomePage.Paragraph4);
                    break;
                case "/aboutme":
                    break;
                case "/projects":
                    break;
                case "/services":
                    break;
                case "/contact":
                    break;
            }
            const navlinks = document.querySelectorAll('.nav a').forEach(function (link) {
                // console.log(link.href);
                if (link.href.includes(`${activePage}`)) {
                    // console.log(`${activePage}`);
                    link.classList.add('active');
                }
            });
            $(".footer small").text(DataSource.Footer.Copyright);
            $(".footer .logo img").attr("src", DataSource.Assets.Logo);
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map