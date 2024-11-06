import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

// Make sure you have proper error handling
export async function POST(req) {
  try {
    // Your API logic here
    const { messages } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const response = await model.generateContent(messages);
    const result = await response.response.text();
    return Response.json({ data: result })
  } catch (error) {
    console.error('API Error:', error)
    return Response.json({ error: error.message }, { status: 500 })
  }
} 