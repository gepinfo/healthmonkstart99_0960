import { Request, Response } from 'express';
import { nutritiondetailsService } from '../service/nutritiondetailsService';
import { CustomLogger } from '../config/Logger'
let nutritiondetails = new nutritiondetailsService();

export class nutritiondetailsController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
nutritiondetails.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritiondetailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritiondetailsController.ts: GpCreate');
    })}


}