import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EditCourseComponent } from "./edit-course.component";

const routes: Routes = [
	{
		path: "",
		component: EditCourseComponent,
	},
];

@NgModule({
	declarations: [EditCourseComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EditCourseModule {}
