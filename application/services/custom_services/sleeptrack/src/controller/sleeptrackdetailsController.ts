import { Request, Response } from 'express';
import { sleeptrackdetailsService } from '../service/sleeptrackdetailsService';
import { CustomLogger } from '../config/Logger'
let sleeptrackdetails = new sleeptrackdetailsService();

export class sleeptrackdetailsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
sleeptrackdetails.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
sleeptrackdetails.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
sleeptrackdetails.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
sleeptrackdetails.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
sleeptrackdetails.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
sleeptrackdetails.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
sleeptrackdetails.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sleeptrackdetailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sleeptrackdetailsController.ts: GpCreate');
    })}


}