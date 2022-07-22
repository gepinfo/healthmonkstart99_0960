import { Component, OnInit } from '@angular/core';
import { Delete items popup screenService } from './delete items popup screen.service';

@Component({
  selector: 'app-delete items popup screen',
  templateUrl: './delete items popup screen.component.html',
  styleUrls: ['./delete items popup screen.component.scss'],
})

export class Delete items popup screenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        healthlynutition: '',
    }

    constructor (
        private delete items popup screenService: Delete items popup screenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}