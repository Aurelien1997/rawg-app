import { API_KEY } from './apikey'

const PageDetail = (argument) => {

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {

      const { name, released, description, rating_top, background_image, rating, ratings_count, developers, website } = gameData;
        const articleDOM = document.querySelector(".page-detail .article");
        articleDOM.querySelector("h1.title").innerHTML = name;
        articleDOM.querySelector("span.rating").innerHTML = rating;
        articleDOM.querySelector("span.rating_top").innerHTML = rating_top;
        articleDOM.querySelector("span.ratings_count").innerHTML = ratings_count;
        articleDOM.querySelector("img.background_image").setAttribute("src", `${background_image}`);
        articleDOM.querySelector("p.release-date span").innerHTML = released;
        articleDOM.querySelector("p.description").innerHTML = description;
        articleDOM.querySelector("p.developers").innerHTML = developers.map(developer => ` ${developer.name} `);
        articleDOM.querySelector("a.anchorTag").setAttribute("href",website);
    };

    const fetchGame = (url, argument) => {

      fetch(`${url}/${argument}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData)
          displayGame(responseData);
        });
    };

    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };
  /* Hide show button and welcome section */
  let welcome = document.getElementById("welcome");
  let showBtn = document.getElementById("showMore")
  welcome.style.display = 'none';
  showBtn.style.display = 'none';
  



  const render = () => {
    pageContent.innerHTML = `
    <section class="page-detail">
      <div class="article">
        <img class='background_image'/>
        <div class="website"><a class="anchorTag" href="">Check Website</a></div>
        <div class="grid-container">
          <div>
            <h1 class="title"></h1>
          </div>
          <div>
            <p class="red">
              <span class="rating"></span> / <span class="rating_top"></span> - <span class="ratings_count"></span> votes
            </p>
          </div>
        </div>
        
        <h2>Plot</h2>
        <p class="description"></p>
        <div class="grid-container">
          <h2>Released date</h2>
          <h2>Developer</h2>
        </div>
        <div class="grid-container">
          <p class="release-date"> <span></span></p>
          <p class="developers">Developer : <span></span></p>
        </div>
        
        
      </div>
    </section>
    `;

    preparePage();
  };

  render();
};

export {PageDetail};