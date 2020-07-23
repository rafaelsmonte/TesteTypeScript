import mongoose from "mongoose";
class MongoDB
{
  static conectar(urlBanco:string):boolean
  {
      
      mongoose
        .connect(urlBanco, {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        })
        .then(() => {
          return true;
        })
        .catch(err => {
          console.log(err);
          return false;
        });
        return true;
  }
}
export default MongoDB;