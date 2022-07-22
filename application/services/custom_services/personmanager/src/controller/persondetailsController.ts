import { Request, Response } from 'express';
import { persondetailsService } from '../service/persondetailsService';
import { CustomLogger } from '../config/Logger'
let persondetails = new persondetailsService();

export class persondetailsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
persondetails.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondetailsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondetailsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
persondetails.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondetailsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondetailsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
persondetails.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondetailsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondetailsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
persondetails.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondetailsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondetailsController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
persondetails.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondetailsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondetailsController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
persondetails.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondetailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondetailsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
persondetails.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondetailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondetailsController.ts: GpCreate');
    })}


}