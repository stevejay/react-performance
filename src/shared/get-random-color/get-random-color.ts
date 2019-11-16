// From: https://github.com/ianfabs/rholor/blob/master/rholor.js

const HEX_DIGITS = "0123456789ABCDEF";

const getRandomColor = () => {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += HEX_DIGITS[Math.floor(Math.random() * 16)];
  }

  return color;
};

export { getRandomColor };
