import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService, private router: Router) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const token = this.authService.getToken();
		let request = req;

		if (token !== undefined && token !== null) {
			request = req.clone({
				setHeaders: {
					authorization: `Bearer ${token}`,
				},
			});
		}

		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse) => {
				if (error.status === 401) {
					this.authService.logout();
					this.router.navigate(["/login"]);
				}
				return throwError(error);
			})
		);
	}
}
