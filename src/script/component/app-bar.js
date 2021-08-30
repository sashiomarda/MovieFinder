class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set time(time) {
        this._time = time;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: #222831;
                color: #00ADB5;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                padding: 16px;
            }
        </style>
        <h2>Movie Finder</h2>
        <div class="clock">
            <span class="time"></span>
            <span class="date"></span>
        </div>`;
    }


}

customElements.define("app-bar", AppBar);