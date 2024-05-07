const { ChatOpenAI } = require("@langchain/openai");

const llm  = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY
})

module.exports = llm