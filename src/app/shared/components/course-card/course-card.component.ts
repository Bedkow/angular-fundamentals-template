import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DurationPipe } from "@app/shared/pipes/duration.pipe";

@Component({
	selector: "app-course-card",
	templateUrl: "./course-card.component.html",
	styleUrls: ["./course-card.component.scss"],
	providers: [DurationPipe],
})
export class CourseCardComponent {
	courseForm!: FormGroup;
}
