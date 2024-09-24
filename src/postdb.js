const mongoose = require("mongoose");
async function main() {
  mongoose.connect("mongodb://localhost:27017/web_sharing", {
    useNewUrlParser: true,
  });
  // await mongoose.connect(
  //   "mongodb+srv://arjuncvinod:gdozFKJP7i12I87s@cluster0.yjxy0xp.mongodb.net/todoListDB",
  //   { useNewUrlParser: true }
  // );
  // mongoose.connect("mongodb://127.0.0.1:27017/myblog") for local DB
  console.log("connected mongodb");
}
main()
const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
    thumbnail:String,
    date:Number,
    like:Number,
    likedby:[String]
    });
  
    

const PosT = mongoose.model("post", postSchema);
module.exports = PosT