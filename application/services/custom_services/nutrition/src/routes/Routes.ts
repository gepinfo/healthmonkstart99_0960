import { Request, Response, NextFunction } from "express";
import { nutritiondetailsController } from '../controller/nutritiondetailsController';


export class Routes {
    private nutritiondetails: nutritiondetailsController = new nutritiondetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/nutritiondetails').post(this.nutritiondetails.GpCreate);
     }

}