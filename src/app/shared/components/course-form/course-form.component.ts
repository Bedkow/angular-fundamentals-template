import { Component, OnDestroy, OnInit } from "@angular/core";
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
import { Subject } from "rxjs";

@Component({
	selector: "app-course-form",
	templateUrl: "./course-form.component.html",
	styleUrls: ["./course-form.component.scss"],
	providers: [DurationPipe],
})

// implement OnDestroy lifecycle method to unsubscribe from the observables
export class CourseFormComponent implements OnInit, OnDestroy {
	private readonly destroy$ = new Subject<void>();

	courseForm!: FormGroup;

	constructor(public fb: FormBuilder, public library: FaIconLibrary) {
		library.addIconPacks(fas);
		this.initializeForm();
	}

	initializeForm(): void {
		this.courseForm = this.fb.group({
			title: ["", [Validators.required, Validators.minLength(2)]],
			description: ["", [Validators.required, Validators.minLength(2)]],
			authors: this.fb.array([]), // FormArray for authors list
			newAuthor: this.fb.group({
				authorName: [
					"",
					[Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")],
				],
			}),
			duration: ["", [Validators.required, Validators.min(0)]],
		});
	}

	ngOnInit() {
		//  move form initialization to ngOnInit lifecycle method
		this.initializeForm();
	}

	// Getter for authors list FormArray
	get authorList() {
		return this.courseForm.get("authors") as FormArray;
	}

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

	removeAuthor(index: number) {
		this.authorList.removeAt(index);
	}

	onSubmit() {
		console.log(this.courseForm.value);
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
