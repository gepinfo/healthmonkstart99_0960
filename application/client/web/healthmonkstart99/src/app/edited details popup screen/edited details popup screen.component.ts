import { Component, OnInit } from '@angular/core';
import { Edited details popup screenService } from './edited details popup screen.service';

@Component({
  selector: 'app-edited details popup screen',
  templateUrl: './edited details popup screen.component.html',
  styleUrls: ['./edited details popup screen.component.scss'],
})

export class Edited details popup screenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        healthlynutition: '',
    }

    constructor (
        private edited details popup screenService: Edited details popup screenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}