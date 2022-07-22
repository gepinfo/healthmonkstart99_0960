import { Component, OnInit } from '@angular/core';
import { View all mealService } from './view all meal.service';

@Component({
  selector: 'app-view all meal',
  templateUrl: './view all meal.component.html',
  styleUrls: ['./view all meal.component.scss'],
})

export class View all mealComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        healthlynutition: '',
    }

    constructor (
        private view all mealService: View all mealService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}