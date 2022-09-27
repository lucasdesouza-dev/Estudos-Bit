import { PlataformDetectorService } from './../../core/plaraform-detector/plataform-detector.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  formLogin!: FormGroup;
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private plataformDetectorService: PlataformDetectorService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.plataformDetectorService.isPlatformBrowser() &&
      this.userNameInput.nativeElement.focus();
  }
  login() {
    const userName = this.formLogin.get('userName')?.value;
    const password = this.formLogin.get('password')?.value;

    this.authService.Authenticate(userName, password).subscribe(
      () => {
        this.router.navigate(['user', userName]);
      },
      (err) => {
        console.log(err);
        this.formLogin.reset();
        this.plataformDetectorService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
        alert('Password Invalid');
      }
    );
  }
}
