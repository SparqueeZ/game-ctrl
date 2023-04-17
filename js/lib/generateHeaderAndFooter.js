

// Ajouter le header, et le changer en fonction de la position du scroll
var generateHeader = (loc) => {

    const pageAccueil = loc.includes("index");
    const pageContact = loc.includes("contact");

    if (pageAccueil) {
        $(document).ready(function () {
            $('body').prepend('<header> <section id="top-header"> <div class="inside white"> <div class="flex"> <div class="logo"><img class="logo-img" src="img/logo-gc.png" alt="" srcset="" /></div> <ul class="headerlist"> <li class="headerlist-content"><a href="index.html" class="white"> Accueil </a></li> <li class="headerlist-content"><a href="#" class="white"> Nos derniers tests </a></li> <li class="headerlist-content"><a href="pages/game-list.html" class="white"> Jeux </a></li> </ul> </div> </div> </section> <section id="sticky-header" class="display-none"> <div class="inside white"> <div class="flex"> <div class="logo"><img class="logo-img" src="img/logo-gc.png" alt="" srcset="" /></div> <ul class="headerlist"> <li class="headerlist-content"><a href="index.html" class="white"> Accueil </a></li> <li class="headerlist-content"><a href="#" class="white"> Nos derniers tests </a></li> <li class="headerlist-content"><a href="pages/game-list.html" class="white"> Jeux </a></li> </ul> </div> </div> </section> </header>');
        });
    } else if (pageContact) {
        $(document).ready(function () {
            $('body').prepend('<header> <section id="top-header"> <div class="inside white"> <div class="flex"> <div class="logo"><img class="logo-img" src="../img/logo-gc.png" alt="" srcset="" /></div> <ul class="headerlist"> <li class="headerlist-content"><a href="../index.html" class="white"> Accueil </a></li> <li class="headerlist-content"><a href="#" class="white"> Nos derniers tests </a></li> <li class="headerlist-content"><a href="../pages/game-list.html" class="white"> Jeux </a></li> </ul> </div> </div> </section> <section id="sticky-header" class="display-none"> <div class="inside white"> <div class="flex"> <div class="logo"><img class="logo-img" src="../img/logo-gc.png" alt="" srcset="" /></div> <ul class="headerlist"> <li class="headerlist-content"><a href="../index.html" class="white"> Accueil </a></li> <li class="headerlist-content"><a href="#" class="white"> Nos derniers tests </a></li> <li class="headerlist-content"><a href="../pages/game-list.html" class="white"> Jeux </a></li> </ul> </div> </div> </section> </header>');
        });
    }
    else {
        $(document).ready(function () {
            $('body').prepend('<header> <section id="top-header"> <div class="inside black"> <div class="flex"> <div class="logo"><img class="logo-img" src="../img/logo-gc.png" alt="" srcset="" /></div> <ul class="headerlist"> <li class="headerlist-content"><a href="../index.html" class="black"> Accueil </a></li> <li class="headerlist-content"><a href="#" class="black"> Nos derniers tests </a></li> <li class="headerlist-content"><a href="../pages/game-list.html" class="black"> Jeux </a></li> </ul> </div> </div> </section> <section id="sticky-header" class="display-none"> <div class="inside white"> <div class="flex"> <div class="logo"><img class="logo-img" src="../img/logo-gc.png" alt="" srcset="" /></div> <ul class="headerlist"> <li class="headerlist-content"><a href="../index.html" class="white"> Accueil </a></li> <li class="headerlist-content"><a href="#" class="white"> Nos derniers tests </a></li> <li class="headerlist-content"><a href="../pages/game-list.html" class="white"> Jeux </a></li> </ul> </div> </div> </section> </header>');
        });
    }
}

const headerscroll = () => {
    const checkHeader = () => {

        $(window).scroll(function () {
            let scrollPosition = $(this).scrollTop();
            //console.log(scrollPosition); // Affiche la position du scroll dans la console du navigateur

            if (scrollPosition >= 100) {
                $('#top-header').addClass("display-none");
                $('#sticky-header').removeClass("display-none").addClass("sticky");
            }
            else {
                $('#top-header').removeClass("display-none");
                $('#sticky-header').addClass("display-none").removeClass("sticky");

            }
        });

    };

    window.addEventListener('scroll', checkHeader)
}
headerscroll();

// Generation du footer 
const generateFooter = (loc) => {

    const pageAccueil = loc.includes("index");


    if (pageAccueil) {
        $(document).ready(function () {
            $('body').append('<footer> <div class="inside"> <div class="footer-collumns-container"> <div class="footer-collumn"> <p>Mentions légales</p> </div> <div class="footer-collumn"> <a href="pages/contact-us.html"> <p>Nous contacter</p> </a> </div> <div class="footer-collumn"> <div class="socials"> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjX_POz6Lf9AhV3VqQEHTETCysQyCl6BAgYEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"> <img src="./img/logo-reseaux/Instagram_simple_icon.svg" alt="" srcset="" class="social-icon" /> </a> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjX_POz6Lf9AhV3VqQEHTETCysQyCl6BAgYEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"> <img src="./img/logo-reseaux/Facebook_F_icon.svg" alt="" srcset="" class="social-icon" /> </a> </div> </div> </div> <div class="footer-bottom"> <p class="very-small-text">Copyrights @SparqueeZ & @Zyklion</p> </div> </div> </footer>');
        });
    } else {
        $(document).ready(function () {
            $('body').append('<footer> <div class="inside"> <div class="footer-collumns-container"> <div class="footer-collumn"> <p>Mentions légales</p> </div> <div class="footer-collumn"> <a href="contact-us.html"> <p>Nous contacter</p> </a> </div> <div class="footer-collumn"> <div class="socials"> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjX_POz6Lf9AhV3VqQEHTETCysQyCl6BAgYEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"> <img src="./img/logo-reseaux/Instagram_simple_icon.svg" alt="" srcset="" class="social-icon" /> </a> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjX_POz6Lf9AhV3VqQEHTETCysQyCl6BAgYEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"> <img src="./img/logo-reseaux/Facebook_F_icon.svg" alt="" srcset="" class="social-icon" /> </a> </div> </div> </div> <div class="footer-bottom"> <p class="very-small-text">Copyrights @SparqueeZ & @Zyklion</p> </div> </div> </footer>');
        });
    }
}