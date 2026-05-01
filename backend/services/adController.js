const generateImage = require("../services/huggingfaceService");
const generateText = require("../services/geminiService");

exports.generateAd = async (req, res) => {
  try {
    const { prompt } = req.body;

    const imageBuffer = await generateImage(prompt);

    const base64Image = `data:image/png;base64,${imageBuffer.toString("base64")}`;

    // RANDOM CAPTION
    const captions = [
      `✨ ${prompt} 😍 Stay stylish & trendy! 🛒`,
      `🔥 ${prompt} 💯 Premium look 😎`,
      `🌟 Upgrade vibe with ${prompt}! 💥`,
      `😎 ${prompt} = new fashion goal! 🛍️`
    ];

    const text = captions[Math.floor(Math.random() * captions.length)];

    res.json({
      image: base64Image,
      caption: text
    });

  } catch (err) {
    console.log(err);
    res.status(500).send("Error generating ad");
  }
};