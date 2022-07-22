import { Request, Response } from 'express';
import {nutritiondetailsDao} from '../dao/nutritiondetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let nutritiondetails = new nutritiondetailsDao();

export class nutritiondetailsService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsService.ts: GpCreate')
     let  nutritiondetailsData = req.body;
     nutritiondetails.GpCreate(nutritiondetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritiondetailsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}