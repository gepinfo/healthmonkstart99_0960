import { Request, Response, NextFunction } from "express";
import { medicationController } from '../controller/medicationController';


export class Routes {
    private medication: medicationController = new medicationController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/medication/:id').delete(this.medication.GpDelete);
app.route('/medication/get/search').get(this.medication.GpSearch);
app.route('/medication/get/update').put(this.medication.GpSearchForUpdate);
app.route('/medication').put(this.medication.GpUpdate);
app.route('/medication/:id').get(this.medication.GpGetNounById);
app.route('/medication').get(this.medication.GpGetAllValues);
app.route('/medication').post(this.medication.GpCreate);
     }

}