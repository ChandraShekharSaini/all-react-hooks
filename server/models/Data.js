import mongoose, { Schema } from "mongoose";

const dataSchema = Schema({
    name: String,

    id: Number
})

const Data = mongoose.model('data', dataSchema)
export default Data