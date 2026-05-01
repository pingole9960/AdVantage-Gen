const sharp = require("sharp");
const fs = require("fs");

module.exports = async function (imageBuffer) {
  const logo = fs.readFileSync("./assets/logo.png");

  return await sharp(imageBuffer)
    .composite([
      {
        input: logo,
        gravity: "southeast"
      }
    ])
    .png()
    .toBuffer();
};