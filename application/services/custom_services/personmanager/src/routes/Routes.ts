import { Request, Response, NextFunction } from "express";
import { persondetailsController } from '../controller/persondetailsController';


export class Routes {
    private persondetails: persondetailsController = new persondetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/persondetails/:id').delete(this.persondetails.GpDelete);
app.route('/persondetails/get/search').get(this.persondetails.GpSearch);
app.route('/persondetails/get/update').put(this.persondetails.GpSearchForUpdate);
app.route('/persondetails').put(this.persondetails.GpUpdate);
app.route('/persondetails/:id').get(this.persondetails.GpGetNounById);
app.route('/persondetails').get(this.persondetails.GpGetAllValues);
app.route('/persondetails').post(this.persondetails.GpCreate);
     }

}