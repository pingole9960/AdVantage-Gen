const axios = require("axios");

module.exports = async function (prompt) {
  try {
    const response = await axios.get(
      `https://image.pollinations.ai/prompt/${encodeURIComponent(
        "high quality, realistic, product photo, " + prompt
      )}`,
      { responseType: "arraybuffer" }
    );

    return response.data;

  } catch (err) {
    console.log("IMAGE ERROR:", err.message);
    throw err;
  }
};