import { Request, Response } from 'express';
import {medicationDao} from '../dao/medicationDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let medication = new medicationDao();

export class medicationService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationService.ts: GpDelete')
     let  medicationId = req.params.id;
     medication.GpDelete(medicationId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationService.ts: GpSearch')
     let  medicationData = req.query;
     medication.GpSearch(medicationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationService.ts: GpSearchForUpdate')
     let  medicationData = req.body;
     medication.GpSearchForUpdate(medicationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationService.ts: GpUpdate')
     let  medicationData = req.body;
     medication.GpUpdate(medicationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationService.ts: GpGetNounById')
     let  medicationId = req.params.id;
     medication.GpGetNounById(medicationId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationService.ts: GpGetAllValues')
     
     medication.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationService.ts: GpCreate')
     let  medicationData = req.body;
     medication.GpCreate(medicationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}