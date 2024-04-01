import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { SessionStorageService } from "./session-storage.service";

interface UserCredentials {
	username: string;
	password: string;
}

interface UserRegistration {
	username: string;
	password: string;
}

@Injectable({
	providedIn: "root",
})
export class AuthService {
	getToken() {
		throw new Error("Method not implemented.");
	}
	private isAuthorized$$ = new BehaviorSubject<boolean>(false);

	constructor(
		private http: HttpClient,
		private sessionStorageService: SessionStorageService
	) {
		this.isAuthorized$$.next(!!this.sessionStorageService.getToken());
	}

	login(user: UserCredentials) {
		this.http
			.post<{ token: string }>(`/api/login`, user)
			.pipe(
				tap((res) => {
					this.sessionStorageService.setToken(res.token);
					this.isAuthorized$$.next(true);
				})
			)
			.subscribe();
	}

	logout() {
		this.sessionStorageService.deleteToken();
		this.isAuthorized$$.next(false);
	}

	register(user: UserRegistration) {
		this.http.post(`/api/register`, user).subscribe();
	}

	get isAuthorised() {
		return this.isAuthorized$$.getValue();
	}

	set isAuthorised(value: boolean) {
		this.isAuthorized$$.next(value);
	}

	getLoginUrl() {
		return "/api/login";
	}
}
