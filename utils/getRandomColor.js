export function getRandomSoftColor() {
  const softColors = [
    '#c0aa92',
    '#c4a481',
    '#b7ab12',
    '#fcb83e',
    '#00b67a',
    '#b645af',
    '#ec7d90',
    '#92ab98',
    '#e46da5',
    '#5291c6',
    '#7bced3',
    '#8bdb6e',
    '#ffa935',
    '#997fe0',
    '#6ec052',
    '#e9d0d0',
    '#00c9d9',
  ];
  const randomIndex = Math.floor(Math.random() * softColors.length - 1);

  // Return the color at the random index
  return softColors[randomIndex];
  // Generate random values for RGB components
  // const red = Math.floor(Math.random() * 150) + 50; // 50 to 200
  // const green = Math.floor(Math.random() * 150) + 50; // 50 to 200
  // const blue = Math.floor(Math.random() * 150) + 50; // 50 to 200

  // // Calculate the perceived brightness
  // const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  // // Ensure the color is not too light or too dark
  // if (brightness < 128) {
  //   // If too dark, lighten the color
  //   return lightenColor(red, green, blue);
  // }
  // // If too light, darken the color
  // return darkenColor(red, green, blue);
}

// Helper function to lighten a color
function lightenColor(red, green, blue) {
  return `#${(red + 50).toString(16)}${(green + 50).toString(16)}${(blue + 50).toString(16)}`;
}

// Helper function to darken a color
function darkenColor(red, green, blue) {
  return `#${(red - 50).toString(16)}${(green - 50).toString(16)}${(blue - 50).toString(16)}`;
}
