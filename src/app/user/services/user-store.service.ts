import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserService } from "./user.service";

@Injectable({
	providedIn: "root",
})
export class UserStoreService {
	private name$$ = new BehaviorSubject<string>("");
	public name$ = this.name$$.asObservable();

	private isAdmin$$ = new BehaviorSubject<boolean>(false);
	public isAdmin$ = this.isAdmin$$.asObservable();

	constructor(private userService: UserService) {}

	getUser() {
		this.userService.getUser().subscribe((user) => {
			this.name$$.next(user.name);
			this.isAdmin$$.next(user.isAdmin);
		});
	}
}
