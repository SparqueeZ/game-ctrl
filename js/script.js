const Slider = () => {
  for (nbr_cartes=0; nbr_cartes<=5; nbr_cartes++){
    $( ".content"+nbr_cartes ).hover(
      function() {
        for (carte=0; carte<=nbr_cartes; carte++){
          $( ".content"+carte ).addClass( "width4" );
        }
      }, function() {
        for (carte=0; carte<=nbr_cartes; carte++){
          $( ".content"+carte ).removeClass( "width4" );
        }
      }
    );
  }
}    

const DescDevelop = () => {
  document.querySelectorAll(".cardV2RatingTabBtn").forEach((cardBtn) => {
    cardBtn.addEventListener("click", (event) => {
      cardDesc = event.target.closest(".cardv2desc");
      cardHasOpen = cardDesc.classList.contains("open");
      if ( cardHasOpen == false ) {
        $(cardDesc).addClass('open');
      } else {
        $(cardDesc).removeClass("open");
      }
    });
  });
}

Slider();
DescDevelop();