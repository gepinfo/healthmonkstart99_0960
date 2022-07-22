import { Request, Response } from 'express';
import {prescriptionDao} from '../dao/prescriptionDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let prescription = new prescriptionDao();

export class prescriptionService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into prescriptionService.ts: GpDelete')
     let  prescriptionId = req.params.id;
     prescription.GpDelete(prescriptionId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from prescriptionService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into prescriptionService.ts: GpSearch')
     let  prescriptionData = req.query;
     prescription.GpSearch(prescriptionData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from prescriptionService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into prescriptionService.ts: GpSearchForUpdate')
     let  prescriptionData = req.body;
     prescription.GpSearchForUpdate(prescriptionData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from prescriptionService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into prescriptionService.ts: GpUpdate')
     let  prescriptionData = req.body;
     prescription.GpUpdate(prescriptionData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from prescriptionService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into prescriptionService.ts: GpGetNounById')
     let  prescriptionId = req.params.id;
     prescription.GpGetNounById(prescriptionId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from prescriptionService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into prescriptionService.ts: GpGetAllValues')
     
     prescription.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from prescriptionService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into prescriptionService.ts: GpCreate')
     let  prescriptionData = req.body;
     prescription.GpCreate(prescriptionData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from prescriptionService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}