import { Component, OnInit } from '@angular/core';
import { Nutration insights morning snack screenService } from './nutration insights morning snack screen.service';

@Component({
  selector: 'app-nutration insights morning snack screen',
  templateUrl: './nutration insights morning snack screen.component.html',
  styleUrls: ['./nutration insights morning snack screen.component.scss'],
})

export class Nutration insights morning snack screenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        healthlynutition: '',
    }

    constructor (
        private nutration insights morning snack screenService: Nutration insights morning snack screenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}