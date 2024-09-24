const mongoose = require("mongoose");
async function main() {
  mongoose.connect("mongodb://localhost:27017/web_sharing", {
    useNewUrlParser: true,
  });
  // await mongoose.connect(
  //   "mongodb+srv://arjuncvinod:gdozFKJP7i12I87s@cluster0.yjxy0xp.mongodb.net/todoListDB",
  //   { useNewUrlParser: true }
    
  // );
  // mongoose.connect("mongodb://127.0.0.1:27017/myblog") for local Db
  console.log("connected profile db");
}
main();
const profileSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  password:String,
  type:String,
  dp: String,
  bio: String,
  weblink:String,
  facebook:String,
  whatsapp:String,
  twitter:String,
  instagram:String,
  phoneno:String
});

const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
