import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AddCourseComponent } from "./add-course.component";

const routes: Routes = [
	{
		path: "",
		component: AddCourseComponent,
	},
];

@NgModule({
	declarations: [AddCourseComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AddCourseModule {}
