//Write a function that takes a string input and returns the number of times "Alpha" appears
  //using replaceAll() and length.

  function countAlpha(str) {
    let withoutAlpha = str.replaceAll("Alpha", "");
    return (str.length - withoutAlpha.length) / "Alpha".length;
  }

  console.log(countAlpha("AlphaBetaAlphaGammaAlpha")); // Output: 3

//-----------output---------
//3