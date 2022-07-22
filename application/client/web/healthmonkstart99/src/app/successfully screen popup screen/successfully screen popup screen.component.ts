import { Component, OnInit } from '@angular/core';
import { Successfully screen popup screenService } from './successfully screen popup screen.service';

@Component({
  selector: 'app-successfully screen popup screen',
  templateUrl: './successfully screen popup screen.component.html',
  styleUrls: ['./successfully screen popup screen.component.scss'],
})

export class Successfully screen popup screenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        healthlynutition: '',
    }

    constructor (
        private successfully screen popup screenService: Successfully screen popup screenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}