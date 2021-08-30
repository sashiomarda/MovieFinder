import regeneratorRuntime from "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js";
import main from "./script/view/main.js";


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

document.addEventListener("DOMContentLoaded", main);
