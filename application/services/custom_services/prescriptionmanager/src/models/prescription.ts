
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const prescriptionSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   medicine-name: String,
   practioner: { type: Schema.Types.String, ref: 'practitioner' }
})

const prescriptionModel = mongoose.model('prescription', prescriptionSchema, 'prescription');
export default prescriptionModel;
