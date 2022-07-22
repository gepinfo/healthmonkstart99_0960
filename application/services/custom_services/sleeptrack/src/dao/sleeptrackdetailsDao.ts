import * as mongoose from 'mongoose';
import sleeptrackdetailsModel from '../models/sleeptrackdetails';
import { CustomLogger } from '../config/Logger'


export class sleeptrackdetailsDao {
    private sleeptrackdetails = sleeptrackdetailsModel;
    constructor() { }
    
    public async GpDelete(sleeptrackdetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsDao.ts: GpDelete');

    

    
    
    
    this.sleeptrackdetails.findByIdAndRemove(sleeptrackdetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(sleeptrackdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(sleeptrackdetailsData).forEach(
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
    this.sleeptrackdetails.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(sleeptrackdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.sleeptrackdetails.findOneAndUpdate({ _id: sleeptrackdetailsData._id }, sleeptrackdetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(sleeptrackdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsDao.ts: GpUpdate');

    

    
    
    
    this.sleeptrackdetails.findOneAndUpdate({ _id: sleeptrackdetailsData._id }, sleeptrackdetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(sleeptrackdetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsDao.ts: GpGetNounById');

    

    
    
    
    this.sleeptrackdetails.findById(sleeptrackdetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsDao.ts: GpGetAllValues');

    

    
    
    
    this.sleeptrackdetails.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(sleeptrackdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsDao.ts: GpCreate');

    let temp = new sleeptrackdetailsModel(sleeptrackdetailsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}