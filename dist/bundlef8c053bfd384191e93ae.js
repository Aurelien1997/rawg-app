/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList.js */ "./src/js/PageList.js");


var Home = function Home() {
  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  console.log('Home', argument);
};



/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDetail": () => (/* binding */ PageDetail)
/* harmony export */ });
/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikey */ "./src/js/apikey.js");


var PageDetail = function PageDetail(argument) {
  var preparePage = function preparePage() {
    var cleanedArgument = argument.trim().replace(/\s+/g, "-");

    var displayGame = function displayGame(gameData) {
      var name = gameData.name,
          released = gameData.released,
          description = gameData.description,
          rating_top = gameData.rating_top,
          background_image = gameData.background_image,
          rating = gameData.rating,
          ratings_count = gameData.ratings_count,
          developers = gameData.developers,
          website = gameData.website;
      var articleDOM = document.querySelector(".page-detail .article");
      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("span.rating").innerHTML = rating;
      articleDOM.querySelector("span.rating_top").innerHTML = rating_top;
      articleDOM.querySelector("span.ratings_count").innerHTML = ratings_count;
      articleDOM.querySelector("img.background_image").setAttribute("src", "".concat(background_image));
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.querySelector("p.developers").innerHTML = developers.map(function (developer) {
        return " ".concat(developer.name, " ");
      });
      articleDOM.querySelector("a.anchorTag").setAttribute("href", website);
    };

    var fetchGame = function fetchGame(url, argument) {
      fetch("".concat(url, "/").concat(argument, "?key=").concat(_apikey__WEBPACK_IMPORTED_MODULE_0__.API_KEY)).then(function (response) {
        return response.json();
      }).then(function (responseData) {
        console.log(responseData);
        displayGame(responseData);
      });
    };

    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };
  /* Hide show button and welcome section */


  var welcome = document.getElementById("welcome");
  var showBtn = document.getElementById("showMore");
  welcome.style.display = 'none';
  showBtn.style.display = 'none';

  var render = function render() {
    pageContent.innerHTML = "\n    <section class=\"page-detail\">\n      <div class=\"article\">\n        <img class='background_image'/>\n        <div class=\"website\"><a class=\"anchorTag\" href=\"\">Check Website</a></div>\n        <div class=\"grid-container\">\n          <div>\n            <h1 class=\"title\"></h1>\n          </div>\n          <div>\n            <p class=\"red\">\n              <span class=\"rating\"></span> / <span class=\"rating_top\"></span> - <span class=\"ratings_count\"></span> votes\n            </p>\n          </div>\n        </div>\n        \n        <h2>Plot</h2>\n        <p class=\"description\"></p>\n        <div class=\"grid-container\">\n          <h2>Released date</h2>\n          <h2>Developer</h2>\n        </div>\n        <div class=\"grid-container\">\n          <p class=\"release-date\"> <span></span></p>\n          <p class=\"developers\">Developer : <span></span></p>\n        </div>\n        \n        \n      </div>\n    </section>\n    ";
    preparePage();
  };

  render();
};



/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageList": () => (/* binding */ PageList)
/* harmony export */ });
/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikey */ "./src/js/apikey.js");


var PageList = function PageList() {
  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var preparePage = function preparePage() {
    var cleanedArgument = argument.trim().replace(/\s+/g, '-');

    var displayResults = function displayResults(articles) {
      var icons = ["", "<i class=\"fab fa-windows icon-platform\" id=\"1\"></i>", "<i class=\"fab fa-playstation icon-platform\" id=\"2\"></i>", "<i class=\"fab fa-xbox icon-platform\" id=\"3\"></i>", "<i class=\"fab fa-app-store-ios icon-platform\" id=\"4\"></i>", "<i class=\"fab fa-apple icon-platform\" id=\"5\"></i>", "<i class=\"fab fa-linux icon-platform\" id=\"6\"></i>", "<i class=\"fab fa-nintendo-switch icon-platform\" id=\"7\"></i>", "<i class=\"fab fa-android icon-platform\" id=\"8\"></i>"];
      var resultsContent = articles.map(function (article) {
        return "<article class=\"cardGame\" style=\"display:none;\">\n          <a id=\"detail\" href=\"#pagedetail/".concat(article.id, "\">\n          <div class=\"container\">\n            <img class=\"list-img\" src='").concat(article.background_image, "'>\n            <div class=\"overlay\">\n              <div class=\"overlay-child\">\n                <p>released : ").concat(article.released, "</p>\n                <p>rating : ").concat(article.rating, "</p>\n                <p>genre : ").concat(article.genres.map(function (genre) {
          return " ".concat(genre.name, " ");
        }), "</p>\n                <p>tag : ").concat(article.tags.map(function (tag) {
          return " ".concat(tag.name, " ");
        })[0], "</p>\n              </div>\n            </div>\n          </div>\n          </a>\n          <h2>").concat(article.name, "</h2>\n          <div>").concat(article.parent_platforms ? article.parent_platforms.map(function (platform) {
          return icons[platform.platform.id];
        }).join('') : "", "</div>\n\n        </article>");
      });
      var resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    var fetchList = function fetchList(url, argument) {
      var finalURL = argument ? "".concat(url, "&search=").concat(argument) : url;
      fetch(finalURL).then(function (response) {
        return response.json();
      }).then(function (responseData) {
        console.log(responseData);
        displayResults(responseData.results);
      });
    };

    fetchList("https://api.rawg.io/api/games?key=".concat(_apikey__WEBPACK_IMPORTED_MODULE_0__.API_KEY), cleanedArgument);
  };

  var render = function render() {
    pageContent.innerHTML = "\n      <section class=\"page-list\">\n        <div class=\"articles\">Loading...</div>\n      </section>\n    ";
    preparePage();
  };

  render();
};



/***/ }),

/***/ "./src/js/apikey.js":
/*!**************************!*\
  !*** ./src/js/apikey.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_KEY": () => (/* binding */ API_KEY)
/* harmony export */ });
var API_KEY = "61765b1b6409494bb345bc71ed0fd42d";


/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/js/Home.js");
/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ "./src/js/PageDetail.js");
/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList */ "./src/js/PageList.js");



var routes = {
  '': _Home__WEBPACK_IMPORTED_MODULE_0__.Home,
  'pagelist': _PageList__WEBPACK_IMPORTED_MODULE_2__.PageList,
  'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0 auto;\n  background-color: black;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  max-width: 1400px;\n}\n\np {\n  line-height: 1.4;\n  font-size: 1.2em;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2em 2em 0px 2em;\n}\n\n.nav-title {\n  color: red;\n  font-size: 2.7em;\n}\n\n.Welcome {\n  padding: 0px 2em 0px 2em;\n}\n\n.welcome-title {\n  font-size: 2.7em;\n}\n\n.search-input {\n  border: 1px solid #fff;\n  font-size: 1.1em;\n  padding: 14px 38px 14px 50px;\n  background: transparent;\n  border-radius: 64px;\n  color: #fff;\n  outline: none;\n}\n\n.search-btn {\n  position: relative;\n  left: 50px;\n  background-color: transparent;\n  border: none;\n  color: #fff;\n  font-size: 1.2em;\n}\n\n.box {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  padding-top: 180px;\n}\n\n.showMore {\n  display: flex;\n  justify-content: center;\n  width: 400px;\n  height: 60px;\n  background-color: red;\n}\n\n.showBtn {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font-size: large;\n  cursor: pointer;\n  outline: inherit;\n}\n\n.article {\n  padding: 2em;\n}\n\n/* card gallery */\n.articles {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 50px;\n}\n\n.cardGame {\n  width: 400px;\n  height: 300px;\n  margin: 10px;\n  padding-top: 60px;\n}\n\n.list-img {\n  width: 400px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 5px;\n}\n\n.icon-platform {\n  padding-right: 10px;\n}\n\n.container {\n  position: relative;\n  width: 400px;\n  height: 300px;\n}\n\n/* detail */\n.title {\n  font-size: 2.7em;\n}\n\nh2 {\n  font-size: 2em;\n}\n\n.red {\n  color: red;\n  font-size: 2em;\n  text-align: right;\n}\n\n.background_image {\n  width: 100%;\n  height: 50vh;\n  object-fit: cover;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.website {\n  position: relative;\n  float: right;\n  background-color: red;\n  width: 200px;\n  height: 60px;\n  top: -10vh;\n}\n\n.anchorTag {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: large;\n}\n\n/* Overlay */\n.overlay {\n  position: absolute;\n  bottom: 0;\n  background: black;\n  background: rgba(0, 0, 0, 0.5);\n  color: #f1f1f1;\n  width: 100%;\n  transition: 0.5s ease;\n  opacity: 0;\n  color: white;\n  font-size: 20px;\n  height: 300px;\n}\n\n.overlay-child {\n  padding-left: 2em;\n}\n\n.container:hover .overlay {\n  opacity: 1;\n}\n\na {\n  text-decoration: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n\n/* Footer */\n.footer {\n  position: relative;\n  padding-top: 100px;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: white;\n  padding-left: 2em;\n}\n\n.line-footer {\n  background-color: red;\n  height: 10px;\n  width: 190px;\n}\n\n/* media query */\n@media only screen and (max-width: 900px) {\n  nav {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n}\n@media only screen and (max-width: 407px) {\n  .search-btn {\n    top: 38px;\n    left: 10px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAEE;EACE,cAAA;EACA,uBAAA;EACA,YAAA;EACA,kCAAA;EACA,iBAAA;AAAJ;;AAGE;EACE,gBAAA;EACA,gBAAA;AAAJ;;AAEE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,wBAAA;AACJ;;AAEE;EACE,UAAA;EACA,gBAAA;AACJ;;AAEE;EACE,wBAAA;AACJ;;AAEE;EACE,gBAAA;AACJ;;AAEE;EACE,sBAAA;EACA,gBAAA;EACA,4BAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;AACJ;;AAEE;EACE,kBAAA;EACA,UAAA;EACA,6BAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;AACJ;;AAEE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AACJ;;AAEE;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,qBAAA;AACJ;;AAEE;EACE,gBAAA;EACA,cAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AACJ;;AAEE;EACE,YAAA;AACJ;;AAIA,iBAAA;AACA;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;AADF;;AAIA;EACE,YAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;AADF;;AAGA;EACE,YAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;AAAF;;AAGA,WAAA;AACA;EACE,gBAAA;AAAF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,UAAA;EACA,cAAA;EACA,iBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AACF;;AACA;EACE,aAAA;EACA,8BAAA;AAEF;;AACA;EACE,kBAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA,YAAA;EACA,UAAA;AAEF;;AACA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAEF;;AACA,YAAA;AACA;EACE,kBAAA;EACA,SAAA;EACA,iBAAA;EACA,8BAAA;EACA,cAAA;EACA,WAAA;EACA,qBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,aAAA;AAEF;;AACA;EACE,iBAAA;AAEF;;AACA;EACE,UAAA;AAEF;;AACA;EACE,wBAAA;EACA,cAAA;EACA,eAAA;AAEF;;AACA,WAAA;AACA;EACE,kBAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAEF;;AACA;EACE,qBAAA;EACA,YAAA;EACA,YAAA;AAEF;;AACA,gBAAA;AAGA;EACE;IACE,aAAA;IACA,sBAAA;IACA,eAAA;EAAF;AACF;AAEA;EACE;IACE,SAAA;IACA,UAAA;EAAF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');\n  \n  body{\n    margin: 0 auto;\n    background-color: black;\n    color: white;\n    font-family: 'Poppins', sans-serif;\n    max-width: 1400px;\n  }\n\n  p {\n    line-height: 1.4;\n    font-size: 1.2em;\n  }\n  nav { \n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2em 2em 0px 2em;\n  }\n\n  .nav-title {\n    color: red;\n    font-size: 2.7em;\n  }\n\n  .Welcome {\n    padding: 0px 2em 0px 2em;\n  }\n\n  .welcome-title {\n    font-size: 2.7em;\n  }\n\n  .search-input {\n    border: 1px solid #fff;\n    font-size: 1.1em;\n    padding: 14px 38px 14px 50px;\n    background: transparent;\n    border-radius: 64px;\n    color: #fff;\n    outline: none;\n  }\n\n  .search-btn {\n    position: relative;\n    left: 50px;\n    background-color: transparent;\n    border: none;\n    color: #fff;\n    font-size: 1.2em;\n  }\n\n  .box {\n    display: none;\n    align-items: center;\n    justify-content: center;\n    padding-top: 180px;\n  }\n\n  .showMore {\n    display: flex;\n    justify-content: center;\n    width: 400px;\n    height: 60px;\n    background-color: red;\n  }\n\n  .showBtn {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font-size: large;\n    cursor: pointer;\n    outline: inherit;\n  }\n\n  .article {\n    padding: 2em;\n  }\n\n\n\n/* card gallery */\n.articles {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;  \n  gap: 50px;\n}\n\n.cardGame {\n  width: 400px;\n  height: 300px;\n  margin: 10px;\n  padding-top: 60px;\n}\n.list-img {\n  width: 400px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 5px;\n}\n\n.icon-platform {\n  padding-right: 10px;\n}\n\n.container {\n  position: relative;\n  width: 400px;\n  height: 300px;\n}\n\n/* detail */\n.title {\n  font-size: 2.7em;\n}\nh2 {\n  font-size: 2em;\n}\n\n.red {\n  color: red;\n  font-size: 2em;\n  text-align: right;\n}\n\n.background_image {\n  width: 100%;\n  height: 50vh;\n  object-fit: cover;\n}\n.grid-container{\n  display: flex;\n  justify-content: space-between;\n}\n\n.website {\n  position: relative;\n  float: right;\n  background-color: red;\n  width: 200px;\n  height: 60px;\n  top: -10vh;\n}\n\n.anchorTag {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: large;\n}\n\n/* Overlay */\n.overlay {\n  position: absolute; \n  bottom: 0; \n  background: rgb(0, 0, 0);\n  background: rgba(0, 0, 0, 0.5);\n  color: #f1f1f1; \n  width: 100%;\n  transition: .5s ease;\n  opacity:0;\n  color: white;\n  font-size: 20px;\n  height: 300px;\n}\n\n.overlay-child{\n  padding-left: 2em;\n}\n\n.container:hover .overlay {\n  opacity: 1;\n}\n\na {\n  text-decoration: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n\n/* Footer */\n.footer {\n  position: relative;\n  padding-top: 100px;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: white;\n  padding-left: 2em;\n}\n\n.line-footer {\n  background-color: red;\n  height: 10px;\n  width: 190px;\n}\n\n/* media query */\n\n\n@media only screen and (max-width: 900px) {\n  nav {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n}\n@media only screen and (max-width: 407px) {\n  .search-btn {\n    top: 38px;\n    left: 10px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/routes */ "./src/js/routes.js");
/* harmony import */ var _js_PageList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/PageList.js */ "./src/js/PageList.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* Form */

var form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var searchInput = document.getElementById("searchInput").value;
  (0,_js_PageList_js__WEBPACK_IMPORTED_MODULE_1__.PageList)(searchInput);
  document.getElementsByClassName("box")[0].style.display = "flex";
  showDiv.style.display = 'flex';
});
/*Show more button*/

var moreBtn = document.querySelector('#showBtn');
var showDiv = document.getElementById('showMore');
var currentIndex = 1;
moreBtn.addEventListener('click', function (e) {
  var cards = _toConsumableArray(document.querySelectorAll('.cardGame'));

  for (var i = currentIndex; i < currentIndex + 3; i++) {
    if (cards[i]) {
      cards[i].style.display = 'block';
    }
  }

  currentIndex += 3;

  if (currentIndex >= cards.length) {
    showDiv.style.display = 'none';
  }
});

var callRoute = function callRoute() {
  var hash = window.location.hash;
  var pathParts = hash.substring(1).split('/');
  var pageName = pathParts[0];
  var pageArgument = pathParts[1] || '';
  var pageFunction = _js_routes__WEBPACK_IMPORTED_MODULE_0__["default"][pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  }
};

window.addEventListener('hashchange', function () {
  return callRoute();
});
window.addEventListener('DOMContentLoaded', function () {
  return callRoute();
});
})();

/******/ })()
;
//# sourceMappingURL=bundlef8c053bfd384191e93ae.js.map