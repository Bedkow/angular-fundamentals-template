import { Inject, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WINDOW, WindowService } from "@app/services/window.service";
// Import and declare any components and services related to the courses module here

@NgModule({
	declarations: [
		// Add component declarations here
	],
	imports: [
		CommonModule,
		// Import other Angular modules as necessary
	],
	providers: [WindowService],
})
export class CoursesModule {
	constructor(@Inject(WINDOW) private window: Window) {}
}
