import { Component, OnInit } from '@angular/core';
import { Persondetails1Service } from './persondetails1.service';

@Component({
  selector: 'app-persondetails1',
  templateUrl: './persondetails1.component.html',
  styleUrls: ['./persondetails1.component.scss'],
})

export class Persondetails1Component implements OnInit {
    public persondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nameperson: '',
    }

    constructor (
        private persondetails1Service: Persondetails1Service,
    ) { }

    ngOnInit() {
        this.persondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}