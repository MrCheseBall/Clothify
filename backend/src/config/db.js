const mongoose = require("mongoose")

const mongodbUrl="mongodb+srv://mrcheese259:qd28GqDnAbedO07z@cluster20.knofksa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster20"

const connectDb=()=>{
    return mongoose.connect(mongodbUrl);
}
module.exports={connectDb} 