import { Router } from 'express';
import { Server, WebSocket } from 'ws';
import ChatService from './chat.service';
import handleWebSocketConnection from './chat.controller';

const chatRouter = Router();

const wss = new Server({ noServer: true });

wss.on('connection', (ws: WebSocket) => {
    ws.on('message', async (message: string) => {
    const userPrompt = message.toString();
    await handleWebSocketConnection(ws, userPrompt);
    });

    // ws.send('Connected to WebSocket server');
});

chatRouter.get('/chat', (req, res) => {
    res.send('Chat API is running');
});

export { chatRouter, wss };