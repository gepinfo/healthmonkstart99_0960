import { Request, Response, NextFunction } from "express";
import { sleeptrackdetailsController } from '../controller/sleeptrackdetailsController';


export class Routes {
    private sleeptrackdetails: sleeptrackdetailsController = new sleeptrackdetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/sleeptrackdetails/:id').delete(this.sleeptrackdetails.GpDelete);
app.route('/sleeptrackdetails/get/search').get(this.sleeptrackdetails.GpSearch);
app.route('/sleeptrackdetails/get/update').put(this.sleeptrackdetails.GpSearchForUpdate);
app.route('/sleeptrackdetails').put(this.sleeptrackdetails.GpUpdate);
app.route('/sleeptrackdetails/:id').get(this.sleeptrackdetails.GpGetNounById);
app.route('/sleeptrackdetails').get(this.sleeptrackdetails.GpGetAllValues);
app.route('/sleeptrackdetails').post(this.sleeptrackdetails.GpCreate);
     }

}