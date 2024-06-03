import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  signUpForm:FormGroup=new FormGroup(
    {
      'userName': new FormControl(null),
      'email': new FormControl(null),
      'gender':new FormControl('male')
    }
  )
}
