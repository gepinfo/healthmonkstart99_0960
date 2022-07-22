import { Request, Response, NextFunction } from "express";
import { prescriptionController } from '../controller/prescriptionController';


export class Routes {
    private prescription: prescriptionController = new prescriptionController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/prescription/:id').delete(this.prescription.GpDelete);
app.route('/prescription/get/search').get(this.prescription.GpSearch);
app.route('/prescription/get/update').put(this.prescription.GpSearchForUpdate);
app.route('/prescription').put(this.prescription.GpUpdate);
app.route('/prescription/:id').get(this.prescription.GpGetNounById);
app.route('/prescription').get(this.prescription.GpGetAllValues);
app.route('/prescription').post(this.prescription.GpCreate);
     }

}