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
  $(document).ready(function() {
    // Détection du click
    $('.cardV2RatingTabBtn').click(function(e){
      // Ajout de la classe au premier click, remove au second
      $(e.target).closest('.cardv2').toggleClass('card-active');
      $(e.target).closest('.card-right').toggleClass('cardright-active');
    });
});

$( ".cardV2RatingTabBtn" ).click(function(e) {
  if ( $( ".cardv2desc" ).hasClass( "open" ) ) {
      console.log($(e.target).closest( ".cardv2 > card-left" ).addClass("Yo"))
  }
});
}

Slider();
DescDevelop();