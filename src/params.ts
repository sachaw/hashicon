import {createCanvas} from './utils';
import {Light} from "./sprite";

export interface Range {
	min: number;
	max: number;
}

export interface OptionalParam {
	enabled: boolean;
}

export interface Params {
	size: number,
	hue: Range;
	saturation: Range;
	lightness: Range;
	variation: Range & OptionalParam;
	shift: Range;
	figureAlpha: Range;
	light: Record<Light, number> & OptionalParam;
	createCanvas: (width: number, height: number) => HTMLCanvasElement;
}

export const DefaultParams: Partial<Params> = {
	hue: {min: 0, max: 360},
	saturation: {min: 70, max: 100},
	lightness: {min: 45, max: 65},
	variation: {min: 5, max: 20, enabled: true},
	shift: {min: 60, max: 300},
	figureAlpha: {min: .7, max: 1.2},
	light: {top: 10, right: -8, left: -4, enabled: true},
	createCanvas,
}
