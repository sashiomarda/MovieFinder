class MovieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    background-color: #222831;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
               
                .fan-art-movie {
                    max-width: 200px;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
               
                .movie-info {
                    padding: 0px 24px;
                }
               
                .movie-info > h2 {
                    font-weight: lighter;
                    color: #EEEEEE;
                    font-weight: bold;
                }
               
                .movie-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-align: justify;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                    color: #00ADB5;
                }

                .movie-flex {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: row;
                    padding: 20px;
                    margin: 5px;
                 }

                 .box {
                    flex-basis: 30%;
                    padding-left: 20px;
                    margin: 5px;
                 }

                 .double {
                    flex-basis: 70%;
                 }

                 @media screen and (max-width: 550px) {                 
                    .movie-flex{
                       flex-direction: column;
                       width: 100%;
                       padding: 0px;
                       margin: 0px;
                    }
                 
                     .box{
                       padding: 20px;
                       margin-left: auto;
                       margin-right: auto;
                     }

                     .movie-info {
                        padding: 0px 24px 24px 24px;
                    }
                  }

            </style>

            <div class="movie-flex">
                <img class="fan-art-movie box" src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="Fan Art">
                <div class="movie-info double">
                    <h2>${this._movie.original_title}</h2>
                    <p>${this._movie.overview}</p>
                </div>
            </div>`;
    }
}

customElements.define("movie-item", MovieItem);