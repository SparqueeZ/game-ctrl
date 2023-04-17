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

Slider();
// On cherche ici le nom de notre page
var loc = $(location).attr('href');
generateHeader(loc);
generateFooter(loc);