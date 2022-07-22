
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const persondetailsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   nameperson: String
})

const persondetailsModel = mongoose.model('persondetails', persondetailsSchema, 'persondetails');
export default persondetailsModel;
