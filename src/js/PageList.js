import { API_KEY } from './apikey'

const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      let icons = ["",`<i class="fab fa-windows icon-platform" id="1"></i>`,`<i class="fab fa-playstation icon-platform" id="2"></i>`,`<i class="fab fa-xbox icon-platform" id="3"></i>`,`<i class="fab fa-app-store-ios icon-platform" id="4"></i>`,`<i class="fab fa-apple icon-platform" id="5"></i>`,`<i class="fab fa-linux icon-platform" id="6"></i>`, `<i class="fab fa-nintendo-switch icon-platform" id="7"></i>`, `<i class="fab fa-android icon-platform" id="8"></i>`]

      const resultsContent = articles.map((article) => (
        `<article class="cardGame" style="display:none;">
          <a id="detail" href="#pagedetail/${article.id}">
          <div class="container">
            <img class="list-img" src='${article.background_image}'>
            <div class="overlay">
              <div class="overlay-child">
                <p>released : ${article.released}</p>
                <p>rating : ${article.rating}</p>
                <p>genre : ${article.genres.map(genre => ` ${genre.name} `)}</p>
                <p>tag : ${article.tags.map(tag => ` ${tag.name} `)[0]}</p>
              </div>
            </div>
          </div>
          </a>
          <h2>${article.name}</h2>
          <div>${article.parent_platforms ? article.parent_platforms.map(platform => icons[platform.platform.id]).join('') : ""}</div>

        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          displayResults(responseData.results);
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { PageList }