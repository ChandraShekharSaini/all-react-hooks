import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
const PORT = 4500

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


import Data from './models/Data.js'
app.post("/addSkills", async (req, res, next) => {

    const { name, id } = req.body
    console.log(name, id)

    const newData = await Data.create({ name, id });

    res.status(201).json(newData)

})

app.get("/getSkills", async (req,res, next) => {

    const data = await Data.find();
      console.log(data)
    res.status(201).json(data)
})


mongoose.connect('mongodb://127.0.0.1:27017/optimistic').then(() => {
    console.log("Connected to MongoDB")
}).catch(() => {
    console.log("Error connecting to MongoDB")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})