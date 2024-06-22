import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
    token: process.env.API_KEY,
})

export default cohere;