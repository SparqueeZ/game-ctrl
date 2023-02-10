//alert("This alert box was called with the onload event");
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