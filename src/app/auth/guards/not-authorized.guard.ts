import { Injectable } from "@angular/core";
import {
	CanActivate,
	Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
	providedIn: "root",
})
export class NotAuthorizedGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | UrlTree {
		if (!this.authService.isAuthorised) {
			return true;
		} else {
			// Redirect to courses if already authorized
			return this.router.createUrlTree(["/courses"]);
		}
	}
}
