require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.AI_STUDIO_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const generateBackstory = async (prompt) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}

module.exports = { generateBackstory }