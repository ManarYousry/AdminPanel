import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-update-shift',
  templateUrl: './update-shift.component.html',
  styleUrls: ['./update-shift.component.css']
})
export class UpdateShiftComponent implements OnInit {
  selectAll = false;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits!: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;
  
  constructor(private _bottomSheetRef: MatBottomSheetRef<UpdateShiftComponent>){
  }
  
    ngOnInit(){
    }
   
    form: FormGroup = new FormGroup({
      $key: new FormControl(null),
      SampleSizeForEachteam: new FormControl('', Validators.required),
      Month: new FormControl(''),
      select:new FormControl('')
     
     
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


    add(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
  
      // Add our fruit
      if (value) {
        this.fruits.push(value);
      }
  
      // Clear the input value
        //event.chipInput!.clear();
      event.input.value=" ";
  
      this.fruitCtrl.setValue(null);
    }
  
    remove(fruit: string): void {
      const index = this.fruits.indexOf(fruit);
  
      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.fruits.push(event.option.viewValue);
      this.fruitInput.nativeElement.value = '';
      this.fruitCtrl.setValue(null);
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
    }

}
