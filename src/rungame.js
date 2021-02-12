// import { runLevel } from "./runlevel.js";
// import { Level } from "./level.js";

async function runGame(plans, Display) {
  let lives = 3;
  for (let level = 0; level < plans.length;) {
    console.log(`Remaining Lives : ${lives}`);
    let status = await runLevel(new Level(plans[level]), Display);
    if (status == "won")
      level++;
    if (status == "lost") {
      lives--;
      if (lives == 0) {
        break;
      }
    }
  }
  if (lives > 0)
    console.log("You've won!");
  else
    console.log("You've lost");
}
