import mongoose from "mongoose"

mongoose.connect("mongodb+srv://rishabkanaujia2002:1234@short-url.unjvilu.mongodb.net/template")
const ProductSchema = new mongoose.Schema({},{ strict: false })

const product = mongoose.models.product|| mongoose.model("product", ProductSchema)

export default product