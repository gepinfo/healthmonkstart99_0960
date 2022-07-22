import { Request, Response } from 'express';
import { prescriptionService } from '../service/prescriptionService';
import { CustomLogger } from '../config/Logger'
let prescription = new prescriptionService();

export class prescriptionController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
prescription.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into prescriptionController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from prescriptionController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
prescription.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into prescriptionController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from prescriptionController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
prescription.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into prescriptionController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from prescriptionController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
prescription.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into prescriptionController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from prescriptionController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
prescription.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into prescriptionController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from prescriptionController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
prescription.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into prescriptionController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from prescriptionController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
prescription.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into prescriptionController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from prescriptionController.ts: GpCreate');
    })}


}