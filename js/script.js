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

var date = new Date()
console.log("Nous sommes le : ");
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let lol = date.getTime();
console.log(lol);

var date2 = new Date('07/02/2023');
let lol2 = date2.getTime();
console.log(lol2);

if (month < 10) {
  console.log(day + "/" + 0 + month + "/" + year);
} else {
  console.log(day + "/" + month + "/" + year);
}

Slider();
// On cherche ici l'adresse de notre page
var loc = $(location).attr('href');
generateHeader(loc);
generateFooter(loc);