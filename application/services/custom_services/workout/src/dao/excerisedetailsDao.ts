import * as mongoose from 'mongoose';
import excerisedetailsModel from '../models/excerisedetails';
import { CustomLogger } from '../config/Logger'


export class excerisedetailsDao {
    private excerisedetails = excerisedetailsModel;
    constructor() { }
    
    public async GpDelete(excerisedetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsDao.ts: GpDelete');

    

    
    
    
    this.excerisedetails.findByIdAndRemove(excerisedetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from excerisedetailsDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(excerisedetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(excerisedetailsData).forEach(
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
    this.excerisedetails.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from excerisedetailsDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(excerisedetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.excerisedetails.findOneAndUpdate({ _id: excerisedetailsData._id }, excerisedetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from excerisedetailsDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(excerisedetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsDao.ts: GpUpdate');

    

    
    
    
    this.excerisedetails.findOneAndUpdate({ _id: excerisedetailsData._id }, excerisedetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from excerisedetailsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(excerisedetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsDao.ts: GpGetNounById');

    

    
    
    
    this.excerisedetails.findById(excerisedetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from excerisedetailsDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsDao.ts: GpGetAllValues');

    

    
    
    
    this.excerisedetails.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from excerisedetailsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(excerisedetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsDao.ts: GpCreate');

    let temp = new excerisedetailsModel(excerisedetailsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from excerisedetailsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}