import { Component, OnInit } from '@angular/core';
import { Nutration insights breakfast screenService } from './nutration insights breakfast screen.service';

@Component({
  selector: 'app-nutration insights breakfast screen',
  templateUrl: './nutration insights breakfast screen.component.html',
  styleUrls: ['./nutration insights breakfast screen.component.scss'],
})

export class Nutration insights breakfast screenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        healthlynutition: '',
    }

    constructor (
        private nutration insights breakfast screenService: Nutration insights breakfast screenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}