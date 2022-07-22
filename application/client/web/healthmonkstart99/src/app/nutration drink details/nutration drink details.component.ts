import { Component, OnInit } from '@angular/core';
import { Nutration drink detailsService } from './nutration drink details.service';

@Component({
  selector: 'app-nutration drink details',
  templateUrl: './nutration drink details.component.html',
  styleUrls: ['./nutration drink details.component.scss'],
})

export class Nutration drink detailsComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        healthlynutition: '',
    }

    constructor (
        private nutration drink detailsService: Nutration drink detailsService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}