import { Component, OnInit } from '@angular/core';
import {ToastComponent} from '../../shared/toast/toast.component';

@Component({
    selector: 'app-page-not-found',
    templateUrl: 'page-not-found.component.html',
    styleUrls: ['page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

    constructor(
        private toast: ToastComponent,
    ) { }

    ngOnInit() {
    }

}
