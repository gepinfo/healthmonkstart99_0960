import { Request, Response, NextFunction } from "express";
import { excerisedetailsController } from '../controller/excerisedetailsController';


export class Routes {
    private excerisedetails: excerisedetailsController = new excerisedetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/excerisedetails/:id').delete(this.excerisedetails.GpDelete);
app.route('/excerisedetails/get/search').get(this.excerisedetails.GpSearch);
app.route('/excerisedetails/get/update').put(this.excerisedetails.GpSearchForUpdate);
app.route('/excerisedetails').put(this.excerisedetails.GpUpdate);
app.route('/excerisedetails/:id').get(this.excerisedetails.GpGetNounById);
app.route('/excerisedetails').get(this.excerisedetails.GpGetAllValues);
app.route('/excerisedetails').post(this.excerisedetails.GpCreate);
     }

}