import * as mongoose from 'mongoose';
import medicationModel from '../models/medication';
import { CustomLogger } from '../config/Logger'


export class medicationDao {
    private medication = medicationModel;
    constructor() { }
    
    public async GpDelete(medicationId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationDao.ts: GpDelete');

    

    
    
    
    this.medication.findByIdAndRemove(medicationId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(medicationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(medicationData).forEach(
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
    this.medication.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(medicationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationDao.ts: GpSearchForUpdate');

    

    
    
    
    this.medication.findOneAndUpdate({ _id: medicationData._id }, medicationData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(medicationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationDao.ts: GpUpdate');

    

    
    
    
    this.medication.findOneAndUpdate({ _id: medicationData._id }, medicationData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(medicationId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationDao.ts: GpGetNounById');

    

    
    
    
    this.medication.findById(medicationId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationDao.ts: GpGetAllValues');

    

    
    
    
    this.medication.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(medicationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationDao.ts: GpCreate');

    let temp = new medicationModel(medicationData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}