import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
	selector: "app-registration-form",
	templateUrl: "./registration-form.component.html",
	styleUrls: ["./registration-form.component.scss"],
})
export class RegistrationFormComponent {
	registrationForm!: FormGroup;

	constructor(private fb: FormBuilder, private router: Router) {
		this.createForm();
	}

	createForm() {
		this.registrationForm = this.fb.group({
			name: ["", [Validators.required, Validators.minLength(6)]],
			email: ["", [Validators.required]],
			password: ["", [Validators.required]],
		});
	}

	onSubmit() {
		if (this.registrationForm.valid) {
			console.log("Form Submitted!", this.registrationForm.value);
			this.router.navigate(["/login"]);
		} else {
			this.validateAllFormFields(this.registrationForm);
		}
	}

	validateAllFormFields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach((field) => {
			const control = formGroup.get(field);
			control!.markAsTouched({ onlySelf: true });
		});
	}
}
