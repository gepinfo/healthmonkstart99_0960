import { Request, Response } from 'express';
import { excerisedetailsService } from '../service/excerisedetailsService';
import { CustomLogger } from '../config/Logger'
let excerisedetails = new excerisedetailsService();

export class excerisedetailsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
excerisedetails.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into excerisedetailsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from excerisedetailsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
excerisedetails.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into excerisedetailsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from excerisedetailsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
excerisedetails.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into excerisedetailsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from excerisedetailsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
excerisedetails.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into excerisedetailsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from excerisedetailsController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
excerisedetails.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into excerisedetailsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from excerisedetailsController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
excerisedetails.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into excerisedetailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from excerisedetailsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
excerisedetails.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into excerisedetailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from excerisedetailsController.ts: GpCreate');
    })}


}