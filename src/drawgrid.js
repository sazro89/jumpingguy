// import { elt } from "./elt.js";
// import { scale } from "./scale.js";

function drawGrid(level) {
  return elt("table", {
    class: "background",
    style: `width: ${level.width * scale}px`
  }, ...level.rows.map(row =>
    elt("tr", {style: `height: ${scale}px`},
      ...row.map(type => elt("td", {class: type})))
  ));
}

// <table width=value>
//   <tr height=value>
//     <td class=type></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   ...
// </table>
