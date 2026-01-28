
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getNailTip() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: 'Give me one short, professional nail care tip for someone looking to maintain their manicure at home. Keep it under 30 words.',
      config: {
        systemInstruction: "You are a professional nail technician named Bhargavi with 10 years of experience. Be encouraging and expert.",
      }
    });
    return response.text || "Keep your cuticles hydrated with oil daily!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hydration is key for healthy nails!";
  }
}

export async function getPersonalizedAdvice(concern: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `My nail concern is: ${concern}. What would you suggest?`,
      config: {
        systemInstruction: "You are Bhargavi, a nail art expert. Provide a concise suggestion for the user's specific nail concern.",
      }
    });
    return response.text;
  } catch (error) {
    return "I recommend a consultation at our studio to better understand your nail health.";
  }
}
