import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-update-archive',
  templateUrl: './update-archive.component.html',
  styleUrls: ['./update-archive.component.css']
})
export class UpdateArchiveComponent implements OnInit {
  selected = 'Please Select';
  
  constructor(private _bottomSheetRef:MatBottomSheetRef<UpdateArchiveComponent>) { }
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  filteredOptions: Observable<string[]> | undefined;
  toppings=new FormControl();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    SampleSizeForEachteam: new FormControl('', Validators.required),
    Month: new FormControl(''),
    select:new FormControl(''),
  
   
  });
  onClear(){
    // this.service.form.reset();
    // this.service.initializeFormGroup();
    // this.notificationService.success(':: Submitted successfully');
  }
  onSubmit(){
    // if(this.service.form.valid){
     
    //   this.service.form.reset();
    // this.service.initializeFormGroup();
    // this.notificationService.success(':: Submitted successfully');
    this.onClose();

    }
 
  onClose(){
    //this.service.form.reset();
   // this.service.initializeFormGroup();
   // this.dialogRef.close();
   this.form.reset();
  this._bottomSheetRef.dismiss();
   //event.preventDefault();

 }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
