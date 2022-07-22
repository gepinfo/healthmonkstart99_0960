
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const nutritiondetailsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   healthlynutition: String
})

const nutritiondetailsModel = mongoose.model('nutritiondetails', nutritiondetailsSchema, 'nutritiondetails');
export default nutritiondetailsModel;
