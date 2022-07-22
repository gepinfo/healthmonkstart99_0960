import { Request, Response } from 'express';
import {sleeptrackdetailsDao} from '../dao/sleeptrackdetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let sleeptrackdetails = new sleeptrackdetailsDao();

export class sleeptrackdetailsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsService.ts: GpDelete')
     let  sleeptrackdetailsId = req.params.id;
     sleeptrackdetails.GpDelete(sleeptrackdetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsService.ts: GpSearch')
     let  sleeptrackdetailsData = req.query;
     sleeptrackdetails.GpSearch(sleeptrackdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsService.ts: GpSearchForUpdate')
     let  sleeptrackdetailsData = req.body;
     sleeptrackdetails.GpSearchForUpdate(sleeptrackdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsService.ts: GpUpdate')
     let  sleeptrackdetailsData = req.body;
     sleeptrackdetails.GpUpdate(sleeptrackdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsService.ts: GpGetNounById')
     let  sleeptrackdetailsId = req.params.id;
     sleeptrackdetails.GpGetNounById(sleeptrackdetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsService.ts: GpGetAllValues')
     
     sleeptrackdetails.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsService.ts: GpCreate')
     let  sleeptrackdetailsData = req.body;
     sleeptrackdetails.GpCreate(sleeptrackdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}