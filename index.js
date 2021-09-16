const express =require('express')
const app = express()
const PORT = 5050
//app.use()

app.get("/",(req, res)=>{
    res.json("Welcome to my world")
})


app.listen(PORT, console.log("Port is runnng on ", PORT))