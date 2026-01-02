import { GoogleGenAI } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStrategyAdvice = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are an expert senior strategy consultant from Leontra Global. Provide concise, professional, and actionable business advice. Your tone is authoritative, insightful, and sophisticated.",
      },
    });
    
    // The response.text property (not a method) directly returns the string output.
    return response.text || "I apologize, I am unable to generate advice at this moment.";
  } catch (error) {
    // Robust error handling for the Strategy Advisor feature
    console.error("Gemini API Error:", error);
    return "The Strategy Advisor is currently offline. Please try again later.";
  }
};