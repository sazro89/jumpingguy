// import { State } from "./state.js";
// import { runAnimation } from "./runanimation.js";
// import { arrowKeys } from "./arrowkeys.js";

function runLevel(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  let ending = 1;
  let running = "yes";

  return new Promise(resolve => {
    function escHandler(event) {
      if (event.key != "Escape") return;
      event.preventDefault();
      if (running == "no") {
        running = "yes";
        runAnimation(frame);
      } else if (running == "yes") {
        running = "pausing";
      } else {
        running = "yes";
      }
    }
    window.addEventListener("keydown", escHandler);

    function frame(time) {
      if (running == "pausing") {
        running = "no";
        return false;
      }

      state = state.update(time, arrowKeys);
      display.syncState(state);
      if (state.status == "playing") {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        window.removeEventListener("keydown", escHandler);
        // arrowKeys.unregister();
        resolve(state.status);
        return false;
      }
    }
    runAnimation(frame);
  });
}

    // runAnimation(time => {
    //   state = state.update(time, arrowKeys);
    //   display.syncState(state);
    //   if (state.status == "playing") {
    //     return true;
    //   } else if () {
    //     return false;
    //   } else if (ending > 0) {
    //     ending -= time;
    //     return true;
    //   } else {
    //     display.clear();
    //     resolve(state.status);
    //     return false;
    //   }
    // });
  // });
// }
