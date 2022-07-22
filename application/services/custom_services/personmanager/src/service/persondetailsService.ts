import { Request, Response } from 'express';
import {persondetailsDao} from '../dao/persondetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let persondetails = new persondetailsDao();

export class persondetailsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondetailsService.ts: GpDelete')
     let  persondetailsId = req.params.id;
     persondetails.GpDelete(persondetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondetailsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondetailsService.ts: GpSearch')
     let  persondetailsData = req.query;
     persondetails.GpSearch(persondetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondetailsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondetailsService.ts: GpSearchForUpdate')
     let  persondetailsData = req.body;
     persondetails.GpSearchForUpdate(persondetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondetailsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondetailsService.ts: GpUpdate')
     let  persondetailsData = req.body;
     persondetails.GpUpdate(persondetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondetailsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondetailsService.ts: GpGetNounById')
     let  persondetailsId = req.params.id;
     persondetails.GpGetNounById(persondetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondetailsService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondetailsService.ts: GpGetAllValues')
     
     persondetails.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondetailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondetailsService.ts: GpCreate')
     let  persondetailsData = req.body;
     persondetails.GpCreate(persondetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondetailsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}