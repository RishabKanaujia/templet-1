import mongoose from "mongoose"


mongoose.connect("mongodb+srv://rishabkanaujia2002:1234@short-url.unjvilu.mongodb.net/template")
const pageOptionSchema = new mongoose.Schema({
   productToggle:Boolean,
   serviceToggle:Boolean

})

const pageOption = mongoose.models.pageOption || mongoose.model("pageOption", pageOptionSchema)

export default pageOption