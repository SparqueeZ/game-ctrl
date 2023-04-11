const Slider = () => {
  for (nbr_cartes = 0; nbr_cartes <= 5; nbr_cartes++) {
    $(".content" + nbr_cartes).hover(
      function () {
        for (carte = 0; carte <= nbr_cartes; carte++) {
          $(".content" + carte).addClass("unusedcard");
        }
      }, function () {
        for (carte = 0; carte <= nbr_cartes; carte++) {
          $(".content" + carte).removeClass("unusedcard");
        }
      }
    );
  }
}

// Développer la fiche d'un jeu sur la page d'accueil
const DescDevelop = () => {
  $(document).ready(function () {
    // Détection du click
    $('.cardBtn').click(function (e) {
      // Ajout de la classe au premier click, remove au second
      $(e.target).closest('.cardBtn').toggleClass('btn-clicked');
      $(e.target).closest('.cardv2').toggleClass('card-active');
    });
  });
}
const PercentMatching = () => {

  const elements = document.querySelectorAll('.cardV2RatingPourcentage');

  elements.forEach(function (element) {

    let size = extractNumber(getValueFromElement(element));
    console.log(size);

    const bar = element.closest(".cardV2RatingBar");

    // Vérifie que la valeur récupérée est un nombre et que ce nombre est en dessous de la valeur indiquée
    if (!isNaN(size) && size >= 66) {
      // Convertit la valeur en %
      const width = `${size}%`;
      bar.style.width = width;
      $(bar).addClass("green");

      console.log("green", size);
    } else if (size <= 66 && size >= 33) {
      const width = `${size}%`;
      bar.style.width = width;
      $(bar).addClass("orange");

      console.log("orange", size);
    } else if (size <= 33 && size >= 15) {
      const width = `${size}%`;
      bar.style.width = width;
      $(bar).addClass("red");

      console.log("red", size);
    } else {
      size = 20;

      const width = `${size}%`;
      bar.style.width = width;
      $(bar).addClass("red");

      console.log("red", size);
    }
  });
}

function getValueFromElement(elementSelector) {
  // Récupère l'élément HTML spécifié
  const element = $(elementSelector);

  // Vérifie que l'élément existe et contient du texte
  if (element.length && element.text().trim().length > 0) {
    // Stocke la valeur de l'élément dans une variable
    const value = element.text().trim();

    // Retourne la valeur stockée
    return value;
  }

  // Retourne null si l'élément n'existe pas ou ne contient pas de texte
  return null;
}

function extractNumber(str) {
  // Vérifie que la chaîne d'entrée est non vide et qu'elle contient un pourcentage
  if (str && str.includes('%')) {
    // Extrait le nombre de la chaîne d'entrée en enlevant le caractère '%'
    const number = parseFloat(str.replace('%', ''));

    // Vérifie que le nombre extrait est un nombre valide
    if (!isNaN(number)) {
      return number;
    }
  }

  // Retourne null si la chaîne d'entrée ne contient pas de pourcentage ou si le nombre extrait n'est pas valide
  return null;
}

const generateHeader = () => {

  const loc = $(location).attr('href');
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



function headerscroll() {
  const checkHeader = () => {
    //console.log('checkHeader');

    $(window).scroll(function () {
      let scrollPosition = $(this).scrollTop();
      console.log(scrollPosition); // Affiche la position du scroll dans la console du navigateur

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

headerscroll()
generateHeader();
Slider();
DescDevelop();
PercentMatching();