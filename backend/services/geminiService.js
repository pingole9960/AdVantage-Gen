const axios = require("axios");

module.exports = async function (prompt) {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Create a catchy Instagram caption with emojis and hashtags for: ${prompt}`
              }
            ]
          }
        ]
      }
    );

    console.log("GEMINI RESPONSE:", JSON.stringify(response.data, null, 2));

    return response.data.candidates[0].content.parts[0].text;

  } catch (err) {
    console.log("❌ GEMINI ERROR FULL:", err.response?.data || err.message);

    return "🔥 Amazing product! Try it now! #Ad #Marketing";
  }
};