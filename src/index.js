import { model } from "./model";
import { App } from "./classes/app";
import "./styles/main.css";

new App(model).init();
//import { Site } from "./classes/site";
//import { templates } from "./templates";

//import { Sidebar } from "./classes/sitdebar";

// const site = new Site("#site");

// site.render(model);

// const updateCallback = (newBlock) => {
//   model.push(newBlock);
//   site.render(model);
// };

// new Sidebar("#panel", updateCallback);
//const $site = document.querySelector("#site");

// model.forEach((block) => {
//   // const toHTML = templates[block.type];
//   // if (toHTML) {
//   site.insertAdjacentHTML("beforeend", block.toHTML());
// });
