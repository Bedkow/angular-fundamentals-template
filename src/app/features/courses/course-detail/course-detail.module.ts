import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CourseDetailComponent } from "./course-detail.component";

const routes: Routes = [
	{
		path: "",
		component: CourseDetailComponent,
	},
];

@NgModule({
	declarations: [CourseDetailComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CourseDetailModule {}
