import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GsbillingService } from 'src/app/gsbilling.service';

@Component({
  selector: 'app-add-edit-size',
  templateUrl: './add-edit-size.component.html',
  styleUrls: ['./add-edit-size.component.css']
})
export class AddEditSizeComponent implements OnInit {
  hide = true;
  FromBuilder: any;
  size_form: any;
  actionBtn: string = "save"
  constructor(
    private fb: FormBuilder,
    private service: GsbillingService,
    @Inject(MAT_DIALOG_DATA) public edit_size: any
  ) {

  }
  ngOnInit(): void {
    this.size_form = this.fb.group({
      size_id: [""],
      size: ['', Validators.required],
      description: [""],
      admin_id_fk: ["1"]

    })

    if (this.edit_size) {
      this.actionBtn = "update"
      this.size_form.controls['size_id'].setValue(this.edit_size.size_id)
      this.size_form.controls['size'].setValue(this.edit_size.size)
      this.size_form.controls['description'].setValue(this.edit_size.description)
      this.size_form.controls['admin_id_fk'].setValue(this.edit_size.admin_id_fk)
    }
  }
  onsubmit() {
    if (!this.edit_size) {
      this.service.post_size(this.size_form.value).subscribe(
        (res: any) => {
          console.log(res)
        }

      )
    }
    else {
      this.updateSize()
    }
  }

  updateSize() {
    // console.log(this.size_form.value)
    this.service.put_size(this.size_form.value).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }

  weight_data_reset() {
    // this.Weight_Form.reset()
    this.size_form.controls['size'].reset()
    this.size_form.controls['Description'].reset()
  }
}
