import { Component, OnInit, Inject } from '@angular/core';

//引入AuthService
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input required minlength="3" type="text" value="Please enter username" name="username" class="ng-touched ng-dirty ng-valid" ng-reflect-minlength="3" ng-reflect-name="username" 
            [(ngModel)]="username"
            #usernameRef="ngModel">
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
          <input required type="password" name="password" value="Please enter password"
            [(ngModel)]="password"
            #passwordRef="ngModel">
          <div *ngIf="passwordRef.errors?.required">this is required</div>
          <button type="submit">Login</button>
        </fieldset>
      </form>
    </div>
  `,
  styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }
  `],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  //在构造函数中将AuthService示例注入到成员变量service中
  //而且我们不需要显式声明成员变量service了
  username = "";
  password = "";
  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

  onClick() {
    console.log('auth result is: ' + this.service.loginWithCredentials(this.username, this.password));
  }

  onSubmit(formValue){
    console.log('auth result is: ' + this.service.loginWithCredentials(this.username, this.password));
  }

}
