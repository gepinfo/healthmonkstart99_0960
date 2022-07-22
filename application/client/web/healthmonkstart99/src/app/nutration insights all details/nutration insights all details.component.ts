import { Component, OnInit } from '@angular/core';
import { Nutration insights all detailsService } from './nutration insights all details.service';

@Component({
  selector: 'app-nutration insights all details',
  templateUrl: './nutration insights all details.component.html',
  styleUrls: ['./nutration insights all details.component.scss'],
})

export class Nutration insights all detailsComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        healthlynutition: '',
    }

    constructor (
        private nutration insights all detailsService: Nutration insights all detailsService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}