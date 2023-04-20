import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {

  constructor(
    private router: Router
  ) { }

  loginUserAndRedirect(token: string) {
    localStorage.setItem('token', token);
    this.router.navigateByUrl('/');
  }

  logoutUserAndRedirect() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAnonymous() {
    return localStorage.getItem('token') == null;
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getPrincipal() {
    let token = localStorage.getItem('token');

    if(token == null)
      return false;

    let tokenParts = token.split('.');
    let tokenPayloadString = this.base64UrlDecode(tokenParts[1]);
    let tokenPayload = JSON.parse(tokenPayloadString);

    return tokenPayload;
  }

  isAdmin() {
    let token = localStorage.getItem('token');

    if(token == null)
      return false;

    let tokenParts = token.split('.');
    let tokenPayloadString = this.base64UrlDecode(tokenParts[1]);
    let tokenPayload = JSON.parse(tokenPayloadString);

    return tokenPayload.role === 'ROLE_ADMIN';
  }

  isStudent() {
    let token = localStorage.getItem('token');

    if(token == null)
      return false;

    let tokenParts = token.split('.');
    let tokenPayloadString = this.base64UrlDecode(tokenParts[1]);
    let tokenPayload = JSON.parse(tokenPayloadString);

    return tokenPayload.role === 'ROLE_STUDENT';
  }

  private base64UrlDecode(input: string) {
    // Replace non-url compatible chars with base64 standard chars
    input = input.replace(/-/g, '+').replace(/_/g, '/');

    // Pad out with standard base64 required padding characters
    var pad = input.length % 4;
    if(pad) {
      if(pad === 1) {
        throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
      }
      input += new Array(5-pad).join('=');
    }

    return atob(input);
  }
}
