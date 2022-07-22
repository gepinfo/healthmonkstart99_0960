import { Request, Response } from 'express';
import { medicationService } from '../service/medicationService';
import { CustomLogger } from '../config/Logger'
let medication = new medicationService();

export class medicationController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
medication.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
medication.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
medication.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
medication.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
medication.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
medication.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
medication.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationController.ts: GpCreate');
    })}


}