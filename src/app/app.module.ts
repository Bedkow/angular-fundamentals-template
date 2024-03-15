import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "@shared/shared.module";
import { AppComponent } from "@app/app.component";
import { CourseInfoComponent } from "@features/course-info/course-info.component";
import { NotAuthorizedGuard } from "@app/auth/guards/not-authorized.guard";
import { AuthorizedGuard } from "@app/auth/guards/authorized.guard";
import { CoursesStoreService } from "@app/services/courses-store.service";
import { CoursesService } from "@app/services/courses.service";
import { CoursesComponent } from "./features/courses/courses.component";
import { CoursesListComponent } from "./features/courses/courses-list/courses-list.component";
import { EmailValidatorDirective } from "./shared/directives/email.directive";

@NgModule({
	declarations: [
		AppComponent,
		CourseInfoComponent,
		CoursesComponent,
		CoursesListComponent,
		EmailValidatorDirective,
	],
	imports: [BrowserModule, SharedModule, FontAwesomeModule],
	providers: [
		AuthorizedGuard,
		NotAuthorizedGuard,
		CoursesService,
		CoursesStoreService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
