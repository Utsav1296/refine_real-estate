import mongoose from "mongoose";
const { Schema } = mongoose;

const PropertySchema = new Schema({
   title: { type: String, required: true }, // String is shorthand for {type: String}
   description: { type: String, required: true },
   propertyType: { type: String, required: true },
   location: { type: String, required: true },
   price: { type: Number, required: true },
   photo: { type: String, required: true },
   creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const propertyModel = mongoose.model('Property', PropertySchema)

export default propertyModel