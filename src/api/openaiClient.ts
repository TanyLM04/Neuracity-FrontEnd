import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: "YOUR_API_KEY_HERE",
  dangerouslyAllowBrowser: true,
});

export default openai;
