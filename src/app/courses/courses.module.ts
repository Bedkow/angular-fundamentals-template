import { Inject, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WINDOW } from "@app/services/window.service";
// Import and declare any components and services related to the courses module here

@NgModule({
	declarations: [
		// Add component declarations here
	],
	imports: [
		CommonModule,
		// Import other Angular modules as necessary
	],
	providers: [
		// Services specific to courses can be provided here
	],
})
export class CoursesModule {
	constructor(@Inject(WINDOW) private window: Window) {}
}
