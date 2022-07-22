import { Component, OnInit } from '@angular/core';
import { ActivedetailsService } from './activedetails.service';

@Component({
  selector: 'app-activedetails',
  templateUrl: './activedetails.component.html',
  styleUrls: ['./activedetails.component.scss'],
})

export class ActivedetailsComponent implements OnInit {
    public persondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nameperson: '',
    }

    constructor (
        private activedetailsService: ActivedetailsService,
    ) { }

    ngOnInit() {
        this.persondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}