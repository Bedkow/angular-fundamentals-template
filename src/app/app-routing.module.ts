import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotAuthorizedGuard } from "./auth/guards/not-authorized.guard";
import { AuthorizedGuard } from "./auth/guards/authorized.guard";
import { WindowService } from "./services/window.service";

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
	providers: [WindowService],
})
export class AppRoutingModule {}
