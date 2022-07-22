import * as mongoose from 'mongoose';
import nutritiondetailsModel from '../models/nutritiondetails';
import { CustomLogger } from '../config/Logger'


export class nutritiondetailsDao {
    private nutritiondetails = nutritiondetailsModel;
    constructor() { }
    
    public async GpCreate(nutritiondetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsDao.ts: GpCreate');

    let temp = new nutritiondetailsModel(nutritiondetailsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritiondetailsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}