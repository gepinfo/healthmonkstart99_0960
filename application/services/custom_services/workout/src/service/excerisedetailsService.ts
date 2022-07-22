import { Request, Response } from 'express';
import {excerisedetailsDao} from '../dao/excerisedetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let excerisedetails = new excerisedetailsDao();

export class excerisedetailsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsService.ts: GpDelete')
     let  excerisedetailsId = req.params.id;
     excerisedetails.GpDelete(excerisedetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from excerisedetailsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsService.ts: GpSearch')
     let  excerisedetailsData = req.query;
     excerisedetails.GpSearch(excerisedetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from excerisedetailsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsService.ts: GpSearchForUpdate')
     let  excerisedetailsData = req.body;
     excerisedetails.GpSearchForUpdate(excerisedetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from excerisedetailsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsService.ts: GpUpdate')
     let  excerisedetailsData = req.body;
     excerisedetails.GpUpdate(excerisedetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from excerisedetailsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsService.ts: GpGetNounById')
     let  excerisedetailsId = req.params.id;
     excerisedetails.GpGetNounById(excerisedetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from excerisedetailsService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsService.ts: GpGetAllValues')
     
     excerisedetails.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from excerisedetailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into excerisedetailsService.ts: GpCreate')
     let  excerisedetailsData = req.body;
     excerisedetails.GpCreate(excerisedetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from excerisedetailsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}