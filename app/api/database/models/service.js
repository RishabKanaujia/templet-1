import mongoose from "mongoose"

mongoose.connect("mongodb+srv://rishabkanaujia2002:1234@short-url.unjvilu.mongodb.net/template")
const ServiceSchema = new mongoose.Schema({},{ strict: false })

const service = mongoose.models.service || mongoose.model("service", ServiceSchema)

export default service