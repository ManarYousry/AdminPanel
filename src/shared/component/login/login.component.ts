import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup=new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
    
  });
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private notser:NotificationService,
    private titleService: Title,
   
  
    @Inject(DOCUMENT) private document: Document
    )
    { 
      
      this.titleService.setTitle("App | Login");
      
     
     
    }

  ngOnInit(): void {
   
 
  }
    
  onSubmit() {
      if (this.form.invalid) {
          return;
      }
    
      
    
        // window.location.href="/"
     
   
   this.router.navigate(['/'], { relativeTo: this.route });
    }
   
    
     
  

}
