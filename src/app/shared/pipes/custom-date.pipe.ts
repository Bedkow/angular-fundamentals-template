import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
	name: "customDate",
})
export class CustomDatePipe implements PipeTransform {
	transform(value: any, ...args: any[]): any {
		const datePipe: DatePipe = new DatePipe("en-GB");
		value = datePipe.transform(value, "dd.MM.yyyy");
		return value;
	}
}
