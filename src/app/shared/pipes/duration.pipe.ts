import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "duration",
})
export class DurationPipe implements PipeTransform {
	transform(value: number): string {
		const hours: number = Math.floor(value / 60);
		const minutes: number = value % 60;
		const hoursString: string = (hours > 9 ? hours : "0" + hours).toString();
		const minutesString: string = (
			minutes > 9 ? minutes : "0" + minutes
		).toString();
		const timeString: string = hoursString + ":" + minutesString;
		return timeString + " hour" + (hours === 1 ? "" : "s");
	}
}
