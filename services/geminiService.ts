
import { GoogleGenAI } from "@google/genai";

// Access environment variable properly for Vite
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;

// Only initialize if API key is available
if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (error) {
    console.warn("Failed to initialize Gemini AI:", error);
  }
}

export async function getNailTip() {
  // Return fallback tip if API is not configured
  if (!ai || !apiKey) {
    return "Keep your cuticles hydrated with oil daily for healthy, beautiful nails!";
  }
  
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
  // Return fallback advice if API is not configured
  if (!ai || !apiKey) {
    return "I recommend a consultation at our studio to better understand your nail health.";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `My nail concern is: ${concern}. What would you suggest?`,
      config: {
        systemInstruction: "You are Bhargavi, a nail art expert. Provide a concise suggestion for the user's specific nail concern.",
      }
    });
    return response.text || "I recommend a consultation at our studio to better understand your nail health.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I recommend a consultation at our studio to better understand your nail health.";
  }
}
