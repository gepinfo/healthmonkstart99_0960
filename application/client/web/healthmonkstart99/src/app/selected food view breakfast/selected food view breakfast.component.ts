import { Component, OnInit } from '@angular/core';
import { Selected food view breakfastService } from './selected food view breakfast.service';

@Component({
  selector: 'app-selected food view breakfast',
  templateUrl: './selected food view breakfast.component.html',
  styleUrls: ['./selected food view breakfast.component.scss'],
})

export class Selected food view breakfastComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        healthlynutition: '',
    }

    constructor (
        private selected food view breakfastService: Selected food view breakfastService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}