const showListProduct = () => {

  const Container = document.getElementById('container');
  let placeholder = '';
  for (let i = 0; i < 5; i++) {
    placeholder += `<div class="cardv2">
      <div class="card-left">
        <span class="cardPlaceholderImg">
          <img src="img/icons/noun-picture-4875198.svg" alt="">
        </span>
      </div>
      <div class="card-right">
        <span class="cardv2name">
          <h3><span class="textReplacer"></span></h3>
        </span>
        <p class="cardv2phrase"><span class="textReplacer"></span><span class="textReplacer"></span></p>
        <span class="cardV2RatingContainer">
          <span class="cardV2RatingSection">
            <span class="cardV2RatingIcon">
              <span class="cardPlaceholderIcon">
                <img src="img/icons/noun-picture-4875198.svg" alt=""></span>
            </span>
            <span class="cardV2RatingProgressBar">
              <span class="cardRatingIconBg"></span>
              <span class="cardRatingBarHolder">
              </span>
            </span>
          </span>
          <span class="cardV2RatingSection">
            <span class="cardV2RatingIcon">
              <span class="cardPlaceholderIcon">
                <img src="img/icons/noun-picture-4875198.svg" alt=""></span>
            </span>
            <span class="cardV2RatingProgressBar">
              <span class="cardRatingIconBg"></span>
              <span class="cardRatingBarHolder">
              </span>
            </span>
          </span>
          <span class="cardV2RatingSection">
            <span class="cardV2RatingIcon">
              <span class="cardPlaceholderIcon">
                <img src="img/icons/noun-picture-4875198.svg" alt=""></span>
            </span>
            <span class="cardV2RatingProgressBar">
              <span class="cardRatingIconBg"></span>
              <span class="cardRatingBarHolder">
              </span>
            </span>
          </span>
          <span class="cardBtnSection">
            <span class="cardBtnHolder">
              <span class="cardBtn">
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>`
  }
  Container.innerHTML = placeholder;

  const dataJeux = get('http://localhost:3000/api/v1/jeux')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  // Utilisation de l'asynchrone avec async await afin d'attendre la réponse de la promise avant d'éxécuter le code
  const printGames = async () => {
    const liste = await dataJeux;
    console.log(liste.data[1].nom); //Accéder au nom du 2e element du tableau

    const Container = document.getElementById('container');

    let game = '';
    liste.data.forEach(jeu => {
      console.log(jeu.plateforme);

      const insert = (element) => {
        if (element == undefined || element == '' || element == 'N/A') {
          return '';
        } else if (element == "playstation") {
          element = "img/icons/plateforme_playstation.svg";
          return `
          <li class="gameLi"><img src="${element}" class="cardBubble gamePlatform" alt=""></li>`
        } else if (element == 'pc') {
          element = "img/icons/plateforme_pc.svg";
          return `
          <li class="gameLi"><img src="${element}" class="cardBubble gamePlatform" alt=""></li>`
        } else if (element == 'xbox') {
          element = "img/icons/plateforme_xbox.svg";
          return `
          <li class="gameLi"><img src="${element}" class="cardBubble gamePlatform" alt=""></li>`
        } else {
          return `<li class="gameLi"><p class="cardBubble gameDate">${element}</p></li>`
            ;
        }
      }

      game += `
          <div class="cardv2">
            <div class="card-left">
              <img class="cardv2img" src="${jeu.img_miniature}" alt="" />
              <span class="cardrating20">
                <span class=" cardrating20in">
                  <p class="rating">${jeu.note_globale}</p>
                  <p class="rating">20</p>
                </span>
              </span>
            </div>
            <div class="card-right">
              <span class="cardv2name"><h3>${jeu.nom}</h3><span class="cardGameDetails">
              ${insert(jeu.date_de_sortie)}
              ${insert(jeu.plateforme)}
              ${insert(jeu.version)}
              ${insert(jeu.developper)}
              
              </span>
              </span>
              <p class="cardv2phrase">${jeu.description_rapide}</p>
              <span class="cardV2RatingContainer">
                <span class="cardV2RatingSection">
                  <span class="cardV2RatingIcon">
                    <img src="img/icons/noun-gamepad-1608468.png" alt="">
                  </span>
                  <span class="cardV2RatingProgressBar">
                    <span class="cardRatingIconBg"></span>
                    <span class="cardRatingBarHolder">
                      <span class="cardV2RatingBar">
                        <p class="cardV2RatingPourcentage">${jeu.note_gameplay}%</p>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="cardV2RatingSection">
                  <span class="cardV2RatingIcon">
                    <img src="img/icons/noun-wrench-1560053.png" alt=""></span>
                  <span class="cardV2RatingProgressBar">
                    <span class="cardRatingIconBg"></span>
                    <span class="cardRatingBarHolder">
                      <span class="cardV2RatingBar">
                        <p class="cardV2RatingPourcentage">${jeu.note_technique}%</p>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="cardV2RatingSection">
                  <span class="cardV2RatingIcon">
                    <img src="img/icons/noun-story-3266367.png" alt=""></span>
                  <span class="cardV2RatingProgressBar">
                    <span class="cardRatingIconBg"></span>
                    <span class="cardRatingBarHolder">
                      <span class="cardV2RatingBar">
                        <p class="cardV2RatingPourcentage">${jeu.note_histoire}%</p>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="cardBtnSection">
                  <span class="cardBtnHolder">
                    <span class="cardBtn">
                      <span class="cardBtnIcon"></span>
                    </span>
                  </span>
                </span>
              </span>
              <span class="warningMessage">
                <img src="img/icons/Warning.svg">
                <p>INDISPONIBLE</p>
              </span>
            </div>
            <div class="cardv2rank"></div>
          </div>`

      console.log(jeu.version);

      const test = () => {
        document.querySelectorAll(".cardGameDetails").forEach(function (e) {

          console.log(e);
          // if (jeu.version == "") {
          //   console.log("Supprimer");
          // }
        })
      }
      test();
    });


    Container.innerHTML = game;

    const PercentMatching = () => {
      const elements = document.querySelectorAll('.cardV2RatingPourcentage');

      elements.forEach(function (element) {
        let size = extractNumber(getValueFromElement(element));
        const bar = element.closest(".cardV2RatingBar");

        // Vérifie que la valeur récupérée est un nombre et que ce nombre est en dessous de la valeur indiquée
        if (!isNaN(size) && size >= 66) {
          // Convertit la valeur en %
          const width = `${size}%`;
          bar.style.width = width;
          $(bar).addClass("green");

        } else if (size <= 66 && size >= 33) {
          const width = `${size}%`;
          bar.style.width = width;
          $(bar).addClass("orange");

        } else if (size <= 33 && size >= 15) {
          const width = `${size}%`;
          bar.style.width = width;
          $(bar).addClass("red");

        } else {
          size = 20;
          const width = `${size}%`;
          bar.style.width = width;
          $(bar).addClass("red");
        }
      });
    }

    function getValueFromElement(elementSelector) {
      const element = $(elementSelector);

      // Vérifie que l'élément existe et contient du texte
      if (element.length && element.text().trim().length > 0) {
        const value = element.text().trim();
        return value;
      }

      // Retourne null si l'élément n'existe pas ou ne contient pas de texte
      return null;
    }

    function extractNumber(str) {
      if (str && str.includes('%')) {
        const number = parseFloat(str.replace('%', ''));

        if (!isNaN(number)) {
          return number;
        }
      }
      return null;
    }
    PercentMatching();

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
    DescDevelop();
  };

  setTimeout(printGames, 1000);
}

showListProduct();