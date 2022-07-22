import { Component, OnInit } from '@angular/core';
import { Bmidetails1Service } from './bmidetails1.service';

@Component({
  selector: 'app-bmidetails1',
  templateUrl: './bmidetails1.component.html',
  styleUrls: ['./bmidetails1.component.scss'],
})

export class Bmidetails1Component implements OnInit {
    public persondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nameperson: '',
    }

    constructor (
        private bmidetails1Service: Bmidetails1Service,
    ) { }

    ngOnInit() {
        this.persondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}