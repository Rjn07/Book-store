import mongoose, { Schema } from "mongoose";

const bookschema= new mongoose.Schema(
    {
        
    "name":"string",
    "price":"number",
    "title":"string",
    "category":"string", 
    "image":"string"
    }
)

 const Book =mongoose.model("Book",bookschema);

export default Book;