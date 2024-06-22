import cohere from "../cohere";
import { Message } from "cohere-ai/api/types/Message"


let chatHistory: Message[] = [];

export async function getChatStream(userPrompt: string, callback: (data:any) => void){
    chatHistory.push({role: "USER", message: userPrompt})
    
    const stream = await cohere.chatStream({
        model: "command-r-plus",
        message: `${userPrompt}`,
        temperature: 0.3,
        chatHistory: chatHistory,
        promptTruncation: "AUTO"
    });

    try{
        for await (const chat of stream){
            if(chat.eventType === "text-generation" && chat.text.trim() !== ""){
                console.log(chat.text)
                callback(chat.text)
            }
        }

        callback("\n")

        
    
    } catch (e){
        console.error(e)
    }
};

export default getChatStream;