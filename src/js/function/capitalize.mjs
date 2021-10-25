let i, j, pieces

function capitalize(str) {
  pieces = str.split(" ");
  for (i = 0; i < pieces.length; i++) {
    j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1).toLowerCase();
    if (pieces[i] === "De") {
      pieces[i] = "de"
    } else if (pieces[i] === "Del") {
      pieces[i] = "del"
    } else if (pieces[i] === "El") {
      pieces[i] = "el"
    } else if (pieces[i] === "La") {
      pieces[i] = "la"
    } else if (pieces[i] === "Los") {
      pieces[i] = "los"
    } else if (pieces[i] === "Las") {
      pieces[i] = "las"
    }
  }
  return pieces.join(" ");
}

export {capitalize}
