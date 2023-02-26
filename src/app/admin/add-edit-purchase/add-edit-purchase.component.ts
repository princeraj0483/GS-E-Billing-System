import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-edit-purchase',
  templateUrl: './add-edit-purchase.component.html',
  styleUrls: ['./add-edit-purchase.component.css']
})
export class AddEditPurchaseComponent implements OnInit {
	active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
