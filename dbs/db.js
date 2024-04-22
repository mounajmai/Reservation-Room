
const mongoose=require("mongoose")
const connectDB=async ()=>{
    try{
        
        await mongoose.connect("mongodb+srv://mouna:mouna123456@cluster0.wwhdyld.mongodb.net/reservation?retryWrites=true&w=majority")
        

        console.log("data base connected  successfully!!")
    }
    catch(error){
        console.log("data base fail"+error)
    }

}
module.exports=connectDB