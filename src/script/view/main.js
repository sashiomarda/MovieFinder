import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
const moment = require("moment");
import $ from "jquery";
const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

    const displayTime = () => {
        moment.locale("id");
        $(".time").text(moment().format("LTS"));
        $(".date").text(moment().format("LL"));
        console.log("tesssmain");
        console.log(moment().format("LTS"));
    };

    const updateTime = () => {
        displayTime();
        setTimeout(updateTime, 1000)
    };

    updateTime();
};

export default main;