import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	FormArray,
	Validators,
	FormControl,
} from "@angular/forms";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { DurationPipe } from "@app/shared/pipes/duration.pipe";

@Component({
	selector: "app-course-form",
	templateUrl: "./course-form.component.html",
	styleUrls: ["./course-form.component.scss"],
	providers: [DurationPipe],
})
export class CourseFormComponent implements OnInit {
	courseForm!: FormGroup;

	constructor(public fb: FormBuilder, public library: FaIconLibrary) {
		library.addIconPacks(fas);
	}

	ngOnInit() {
		// Initialized and set up validation for courseForm
		this.courseForm = this.fb.group({
			title: ["", [Validators.required, Validators.minLength(2)]],
			description: ["", [Validators.required, Validators.minLength(2)]],
			authors: this.fb.array([]), // FormArray for authors list
			newAuthor: this.fb.group({
				// FormGroup for new author
				authorName: [
					"",
					[Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")],
				],
			}),
			duration: ["", [Validators.required, Validators.min(0)]],
		});
	}

	// Getter for authors list FormArray
	get authorList() {
		return this.courseForm.get("authors") as FormArray;
	}

	// Method to add a new author
	addAuthor() {
		if (this.courseForm?.get("newAuthor")?.get("authorName")?.valid) {
			const authorsControl = <FormArray>this.courseForm.controls["authors"];
			authorsControl.push(
				new FormControl(
					this.courseForm?.get("newAuthor")?.get("authorName")?.value
				)
			);
			this.courseForm?.get("newAuthor")?.get("authorName")?.reset();
		}
	}

	// Method to remove an author
	removeAuthor(index: number) {
		this.authorList.removeAt(index);
	}

	// Method to handle form submission
	onSubmit() {
		console.log(this.courseForm.value);
	}
}
