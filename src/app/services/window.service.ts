import { FactoryProvider, InjectionToken } from "@angular/core";

export const WINDOW = new InjectionToken<Window>("window");

export const WindowService: FactoryProvider = {
	provide: WINDOW,
	useFactory: getWindow,
};

export function getWindow(): Window {
	return window;
}
