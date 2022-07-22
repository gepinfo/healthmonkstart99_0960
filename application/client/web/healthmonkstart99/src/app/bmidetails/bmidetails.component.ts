import { Component, OnInit } from '@angular/core';
import { BmidetailsService } from './bmidetails.service';

@Component({
  selector: 'app-bmidetails',
  templateUrl: './bmidetails.component.html',
  styleUrls: ['./bmidetails.component.scss'],
})

export class BmidetailsComponent implements OnInit {
    public persondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nameperson: '',
    }

    constructor (
        private bmidetailsService: BmidetailsService,
    ) { }

    ngOnInit() {
        this.persondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}