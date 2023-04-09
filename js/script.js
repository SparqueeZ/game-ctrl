const Slider = () => {
  for (nbr_cartes = 0; nbr_cartes <= 5; nbr_cartes++) {
    $(".content" + nbr_cartes).hover(
      function () {
        for (carte = 0; carte <= nbr_cartes; carte++) {
          $(".content" + carte).addClass("width4");
        }
      }, function () {
        for (carte = 0; carte <= nbr_cartes; carte++) {
          $(".content" + carte).removeClass("width4");
        }
      }
    );
  }
}

// Développer la fiche d'un jeu sur la page d'accueil
const DescDevelop = () => {
  $(document).ready(function () {
    // Détection du click
    $('.cardV2RatingTabBtn').click(function (e) {
      // Ajout de la classe au premier click, remove au second
      $(e.target).closest('.cardv2').toggleClass('card-active');
      $(e.target).closest('.card-right').toggleClass('cardright-active');
    });
  });

  $(".cardV2RatingTabBtn").click(function (e) {
    if ($(".cardv2desc").hasClass("open")) {
      console.log($(e.target).closest(".cardv2 > card-left").addClass("Yo"))
    }
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
      size = 20;

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

Slider();
DescDevelop();
PercentMatching();