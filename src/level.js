// import { Player } from "./player.js";
// import { Coin } from "./coin.js";
// import { Lava } from "./lava.js";
// import { Vec } from "./vec.js";

class Level {
  constructor(plan) {
    // trim removes whitespace at the start and end of a string
    // split takes a string and turns it into an array of substrings, and
    // we split on newlines in this case
    // map transforms an array based on rules, so by splitting we have an array
    // of strings, and we make those strings into separate character elements
    // with l => [...l]
    let rows = plan.trim().split("\n").map(l => [...l]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];

    this.rows = rows.map((row, y) => {
      // worth keeping in mind, y and x are inlined values corresponding to
      // which part of the array you're currently at
      return row.map((ch, x) => {
        // remember, ch is the value of a cell in our level, which corresponds
        // to a value in levelChars.  So we set a value called type to a value
        // based on that.
        let type = levelChars[ch];
        // if the type is a string, then we just return that (empty, wall, lava)
        if (typeof type == "string") return type;
        // otherwise, we know it's an actor and we want to add it to our array
        // of actors we're keeping track of
        this.startActors.push(type.create(new Vec(x, y), ch));
        // then we return empty so we can continue iterating
        return "empty";
      });
    });
  }

  touches(pos, size, type) {
    var xStart = Math.floor(pos.x);
    var xEnd = Math.ceil(pos.x + size.x);
    var yStart = Math.floor(pos.y);
    var yEnd = Math.ceil(pos.y + size.y);
    let here;

    for (var y = yStart; y < yEnd; y++) {
      for (var x = xStart; x < xEnd; x++) {
        // let isOutside = x < 0 || x >= this.width ||
        //                 y < 0 || y >= this.height;
        // let here = isOutside ? "wall" : this.rows[y][x];
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
          here = "wall";
        } else {
          here = this.rows[y][x];
        }
        if (here == type) {
          return true;
        }
      }
    }
    return false;
  }
}

const levelChars = {
  ".": "empty",
  "#": "wall",
  "+": "lava",
  "@": Player,
  "o": Coin,
  "=": Lava,
  "|": Lava,
  "v": Lava
};
