import { Component, OnInit } from '@angular/core';
import { SummeryscreensService } from './summeryscreens.service';

@Component({
  selector: 'app-summeryscreens',
  templateUrl: './summeryscreens.component.html',
  styleUrls: ['./summeryscreens.component.scss'],
})

export class SummeryscreensComponent implements OnInit {
    public persondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nameperson: '',
    }

    constructor (
        private summeryscreensService: SummeryscreensService,
    ) { }

    ngOnInit() {
        this.persondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}