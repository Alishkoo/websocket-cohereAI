import {getChatStream} from "./chat.service";
import { Request, Response } from 'express';

const handleWebSocketConnection = async (ws: WebSocket, userPrompt: string) => {
    try {
        await getChatStream(userPrompt, (data) => {
            ws.send((data));
        });
    } catch (error) {
        ws.send('Failed to process OpenAI stream' + error);
    }
}

export default handleWebSocketConnection;