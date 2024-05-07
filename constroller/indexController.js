const llm = require("../llm/indexLLM")
exports.index = async(req,res)=>{
    try{
        const response = await llm.invoke(`${req.params.word}`)
        res.send(response)
    }
    catch(err){
        console.log(err.message)
    }
}