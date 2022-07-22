import * as mongoose from 'mongoose';
import prescriptionModel from '../models/prescription';
import { CustomLogger } from '../config/Logger'


export class prescriptionDao {
    private prescription = prescriptionModel;
    constructor() { }
    
    public async GpDelete(prescriptionId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into prescriptionDao.ts: GpDelete');

    

    
    
    
    this.prescription.findByIdAndRemove(prescriptionId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from prescriptionDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(prescriptionData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into prescriptionDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(prescriptionData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.prescription.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from prescriptionDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(prescriptionData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into prescriptionDao.ts: GpSearchForUpdate');

    

    
    
    
    this.prescription.findOneAndUpdate({ _id: prescriptionData._id }, prescriptionData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from prescriptionDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(prescriptionData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into prescriptionDao.ts: GpUpdate');

    

    
    
    
    this.prescription.findOneAndUpdate({ _id: prescriptionData._id }, prescriptionData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from prescriptionDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(prescriptionId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into prescriptionDao.ts: GpGetNounById');

    

    
    
    
    this.prescription.findById(prescriptionId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from prescriptionDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into prescriptionDao.ts: GpGetAllValues');

    

    
    
    
    this.prescription.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from prescriptionDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(prescriptionData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into prescriptionDao.ts: GpCreate');

    let temp = new prescriptionModel(prescriptionData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from prescriptionDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}