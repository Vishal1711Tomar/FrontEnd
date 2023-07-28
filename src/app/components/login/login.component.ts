import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string;
  message!: string;
  // login() {
  //   this.auth.checkCredentials(this.email, this.password).subscribe(
  //     (data) => {
  //       if (data.length > 0) {
  //         this.message = 'Login successful!';
  //         // Do something when login is successful, like navigating to a new page.
  //       } else {
  //         this.message = 'Invalid email or password';
  //         // Do something when login fails, like displaying an error message.
  //       }
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //       // Handle the error, e.g., display an error message to the user.
  //     }
  //   );
  // }
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  loginForm!: FormGroup;
  loginObj!: { UserName: string; Password: string; Role: string; };
  constructor(
    private fb: FormBuilder,
    private auth:AuthService
  ) {}
  
  ngOnInit() {
    this.auth.setShowToolbar(false);
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
     // Role:['', Validators.required],
    });
  }
  ngOnDestory():void {
     this.auth.setShowToolbar(true);
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
              alert(res.message);
      },
      // error: (err) => {
      
      //      alert(err);
      //   },
      });

      // this.validateAllFormFields(this.loginForm);
      // alert("Your form valid");
      // this.auth.login(this.loginForm.value).subscribe({
      //   next: (res) => {
      //         console.log(res.message);
      // },
      // error: (err) => {
      
      //      console.log(err);
      //   },});
      // this.auth.signIn(this.loginForm.value).subscribe({
      //   next: (res) => {
      //     console.log(res.message);
      //     this.loginForm.reset();
      //     this.auth.storeToken(res.accessToken);
      //     this.auth.storeRefreshToken(res.refreshToken);
      //     const tokenPayload = this.auth.decodedToken();
      //     this.userStore.setFullNameForStore(tokenPayload.name);
      //     this.userStore.setRoleForStore(tokenPayload.role);
      //     this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
      //     this.router.navigate(['dashboard'])
      //   },
      //   error: (err) => {
      //     this.toast.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
      //     console.log(err);
      //   },
      // });
    } else { 
      // throw the error using toaster and with required fields
      
      this.validateAllFormFields(this.loginForm);
      alert("Your form is invalid")
    }
  }
  private validateAllFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateAllFormFields(control)

      }
    })
  } 
  
  // if(this.loginForm.userName == 'user123' && this.loginObj.password =='user@123') {
  //    localStorage.setItem('role','user');
  //    this.router.navigateByUrl('user-dashboard');
  //    } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
  //     localStorage.setItem('role','admin');
  //     this.router.navigateByUrl('admin-dash');
  //    }
  

    }
