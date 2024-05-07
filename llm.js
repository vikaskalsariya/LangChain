import { ChatOpenAI } from "@langchain/openai";

const model  = new ChatOpenAI({
    modelName:"gpt-3.5-turbo",
    temperature: 0.7,
    maxTokens:1000,
    verbose: true,
})

const res = await model.invoke('what is react js???')
console.log("-*",res)