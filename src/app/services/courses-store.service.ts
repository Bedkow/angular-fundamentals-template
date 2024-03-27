import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { tap } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class CoursesStoreService {
	private isLoading$$ = new BehaviorSubject<boolean>(false);
	public isLoading$ = this.isLoading$$.asObservable();

	private courses$$ = new BehaviorSubject<any[]>([]);
	public courses$ = this.courses$$.asObservable();

	constructor(private coursesService: CoursesService) {}

	getAll() {
		this.isLoading$$.next(true);
		this.coursesService
			.getAll()
			.pipe(tap(() => this.isLoading$$.next(false)))
			.subscribe((courses) => this.courses$$.next(courses));
	}

	createCourse(courseData: any) {
		this.coursesService.createCourse(courseData).subscribe(() => this.getAll());
	}

	editCourse(courseId: string, courseData: any) {
		this.coursesService
			.editCourse(courseId, courseData)
			.subscribe(() => this.getAll());
	}

	getCourse(courseId: string) {
		return this.coursesService.getCourse(courseId);
	}

	deleteCourse(courseId: string) {
		this.coursesService.deleteCourse(courseId).subscribe(() => this.getAll());
	}

	filterCourses(queryParams: any) {
		this.isLoading$$.next(true);
		this.coursesService
			.filterCourses(queryParams)
			.pipe(tap(() => this.isLoading$$.next(false)))
			.subscribe((courses) => this.courses$$.next(courses));
	}

	getAllAuthors() {
		return this.coursesService.getAllAuthors();
	}

	createAuthor(authorData: any) {
		this.coursesService
			.createAuthor(authorData)
			.subscribe(() => this.getAllAuthors());
	}

	getAuthorById(authorId: string) {
		return this.coursesService.getAuthorById(authorId);
	}
}
