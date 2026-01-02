import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getCourseAdvice = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "Demo Mode: API Key is missing. Please configure your Gemini API Key to get real advice. (AI is currently simulated for safety)";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      You are an expert educational counselor for a Bengali course selling website called "Shikho".
      The user is asking: "${query}".
      
      Please provide a short, encouraging response in BENGALI (Bangla) language.
      Suggest what kind of skills or courses they should focus on based on their query.
      Keep the answer under 50 words. Be friendly and professional.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "দুঃখিত, বর্তমানে পরামর্শ দেওয়া সম্ভব হচ্ছে না। কিছুক্ষণ পর আবার চেষ্টা করুন।";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "সার্ভারে সমস্যা হয়েছে। দয়া করে আপনার ইন্টারনেট সংযোগ চেক করুন।";
  }
};