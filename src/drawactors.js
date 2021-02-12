// import { elt } from "./elt.js";
// import { scale } from "./scale.js";

function drawActors(actors) {
  // explanation : 
  // let actorsDiv = document.createElement("div");
  // for (let actor of actors) {
  //   let rect = document.createElement("div");
  //   rect.classList.add(`actor`, `${actor.type}`);
  //   rect.style.width = `${actor.size.x * scale}px`;
  //   rect.style.height = `${actor.size.y * scale}px`;
  //   rect.style.left = `${actor.pos.x * scale}px`;
  //   rect.style.top = `${actor.pos.y * scale}px`;
  //   actorsDiv.appendChild(rect);
  // }
  // return actorsDiv;
  
  return elt("div", {}, ...actors.map(actor => {
    let rect = elt("div", {class: `actor ${actor.type}`});
    rect.style.width = `${actor.size.x * scale}px`;
    rect.style.height = `${actor.size.y * scale}px`;
    rect.style.left = `${actor.pos.x * scale}px`;
    rect.style.top = `${actor.pos.y * scale}px`;
    return rect;
  }));
}
