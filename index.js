
const fs = require('fs')
const express =  require('express')
const app = express()
const client = require('https');
const path = require('path')

app.get("/photo", (req,res) => {
fs.readdir("./photos", (err,files) => {
    if(err) throw err;
    const randomthing = files[Math.floor(Math.random() * files.length)];
    res.sendFile(path.join(__dirname , "/photos", randomthing))
})
})



app.get("/gif", (req,res) => {
    fs.readdir("./gifs", (err,files) => {
        if(err) throw err;
        const randomthing = files[Math.floor(Math.random() * files.length)];
        res.sendFile(path.join(__dirname , "/gifs", randomthing))
    })
    })

app.listen(3000, () => {
    console.log("Listen to 3000")
})
