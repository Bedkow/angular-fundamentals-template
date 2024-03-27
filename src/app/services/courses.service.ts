import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class CoursesService {
	private apiUrl = "your_api_endpoint"; // Update with your API endpoint

	constructor(private http: HttpClient) {}

	getAll(): Observable<any> {
		return this.http.get(`${this.apiUrl}/courses`);
	}

	createCourse(courseData: any): Observable<any> {
		return this.http.post(`${this.apiUrl}/courses`, courseData);
	}

	editCourse(courseId: string, courseData: any): Observable<any> {
		return this.http.put(`${this.apiUrl}/courses/${courseId}`, courseData);
	}

	getCourse(courseId: string): Observable<any> {
		return this.http.get(`${this.apiUrl}/courses/${courseId}`);
	}

	deleteCourse(courseId: string): Observable<any> {
		return this.http.delete(`${this.apiUrl}/courses/${courseId}`);
	}

	filterCourses(queryParams: any): Observable<any> {
		return this.http.get(`${this.apiUrl}/courses`, { params: queryParams });
	}

	getAllAuthors(): Observable<any> {
		return this.http.get(`${this.apiUrl}/authors`);
	}

	createAuthor(authorData: any): Observable<any> {
		return this.http.post(`${this.apiUrl}/authors`, authorData);
	}

	getAuthorById(authorId: string): Observable<any> {
		return this.http.get(`${this.apiUrl}/authors/${authorId}`);
	}
}
