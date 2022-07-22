import { Component, OnInit } from '@angular/core';
import { Nutrition food details screen 1Service } from './nutrition food details screen 1.service';

@Component({
  selector: 'app-nutrition food details screen 1',
  templateUrl: './nutrition food details screen 1.component.html',
  styleUrls: ['./nutrition food details screen 1.component.scss'],
})

export class Nutrition food details screen 1Component implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        healthlynutition: '',
    }

    constructor (
        private nutrition food details screen 1Service: Nutrition food details screen 1Service,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}