import { Injectable, Inject } from "@angular/core";
import { WINDOW } from "@app/services/window.service";

// Constant for session storage key
const TOKEN = "SESSION_TOKEN";

@Injectable({
	providedIn: "root",
})
export class SessionStorageService {
	constructor(@Inject(WINDOW) private window: Window) {}

	// Method to store the token in session storage
	setToken(token: string): void {
		this.window.sessionStorage.setItem(TOKEN, token);
	}

	// Method to get the token from session storage
	getToken(): string | null {
		return this.window.sessionStorage.getItem(TOKEN);
	}

	// Method to delete the token from session storage
	deleteToken(): void {
		this.window.sessionStorage.removeItem(TOKEN);
	}
}
