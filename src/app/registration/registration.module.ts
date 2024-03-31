import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionStorageService } from "@app/auth/services/session-storage.service";
import { AuthService } from "@app/auth/services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { WindowService } from "@app/services/window.service";
// Import and declare any components related to the registration module here

@NgModule({
	declarations: [],
	imports: [CommonModule, HttpClientModule],
	providers: [SessionStorageService, AuthService, WindowService],
})
export class RegistrationModule {}
