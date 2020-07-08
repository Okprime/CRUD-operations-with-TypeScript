import mongoose, { Schema } from 'mongoose';

export const Brand = new Schema({
    brandName: String,
    brandCode: String,
    brandDescription: String,
    brandRating: Number,
});

const brands = mongoose.model("brands", Brand);
export default brands;
