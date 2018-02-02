import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ToasterService } from 'app/services/toaster/toaster.service';

@Component({
	selector: 'login',
	templateUrl: 'login.template.html'
})
export class LoginComponent {
	user: Observable<firebase.User>;
	email: string;
	password: string;
	isLoggingIn: boolean = false;

	constructor(public afAuth: AngularFireAuth, public _Router: Router, public _toasterService: ToasterService) {
		this.user = afAuth.authState;
	}

	prepareOnSuccessLogin(userResult: firebase.User) {

	}

	login() {
		
	}

	logout() {
		
	}

	isValidForm() {
		return (this.email && this.password);
	}
}
