import * as mongoose from 'mongoose';
import persondetailsModel from '../models/persondetails';
import { CustomLogger } from '../config/Logger'


export class persondetailsDao {
    private persondetails = persondetailsModel;
    constructor() { }
    
    public async GpDelete(persondetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondetailsDao.ts: GpDelete');

    

    
    
    
    this.persondetails.findByIdAndRemove(persondetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from persondetailsDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(persondetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondetailsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(persondetailsData).forEach(
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
    this.persondetails.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from persondetailsDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(persondetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondetailsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.persondetails.findOneAndUpdate({ _id: persondetailsData._id }, persondetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from persondetailsDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(persondetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondetailsDao.ts: GpUpdate');

    

    
    
    
    this.persondetails.findOneAndUpdate({ _id: persondetailsData._id }, persondetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from persondetailsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(persondetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondetailsDao.ts: GpGetNounById');

    

    
    
    
    this.persondetails.findById(persondetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from persondetailsDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondetailsDao.ts: GpGetAllValues');

    

    
    
    
    this.persondetails.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from persondetailsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(persondetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondetailsDao.ts: GpCreate');

    let temp = new persondetailsModel(persondetailsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from persondetailsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}