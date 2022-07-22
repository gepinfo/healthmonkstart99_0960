
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const medicationSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String,
   type: String,
   dosage-milligram: String,
   active: Boolean,
   prescription-id: String,
   schedule: { type: Schema.Types.String, ref: 'schedule' }
})

const medicationModel = mongoose.model('medication', medicationSchema, 'medication');
export default medicationModel;
