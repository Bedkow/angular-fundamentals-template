import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotAuthorizedGuard } from "./auth/guards/not-authorized.guard";
import { AuthorizedGuard } from "./auth/guards/authorized.guard";
import { AdminGuard } from "./user/guards/admin.guard";

const routes: Routes = [
	{
		path: "login",
		loadChildren: () =>
			import("./login/login.module").then((m) => m.LoginModule),
		canActivate: [NotAuthorizedGuard],
	},
	{
		path: "registration",
		loadChildren: () =>
			import("./registration/registration.module").then(
				(m) => m.RegistrationModule
			),
		canActivate: [NotAuthorizedGuard],
	},
	{
		path: "courses",
		loadChildren: () =>
			import("./courses/courses.module").then((m) => m.CoursesModule),
		canLoad: [AuthorizedGuard],
	},
	{
		path: "courses/add",
		loadChildren: () =>
			import("./features/courses/add-course/add-course.module").then(
				(m) => m.AddCourseModule
			),
		canLoad: [AdminGuard],
	},
	{
		path: "courses/:id",
		loadChildren: () =>
			import("./features/courses/course-detail/course-detail.module").then(
				(m) => m.CourseDetailModule
			),
		canLoad: [AuthorizedGuard],
	},
	{
		path: "courses/edit/:id",
		loadChildren: () =>
			import("./features/courses/edit-course/edit-course.module").then(
				(m) => m.EditCourseModule
			),
		canLoad: [AdminGuard],
	},
	{
		path: "",
		redirectTo: "/courses",
		pathMatch: "full",
	},
	{
		// wildcard route for a 404 page or redirect
		path: "**",
		redirectTo: "/courses",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
