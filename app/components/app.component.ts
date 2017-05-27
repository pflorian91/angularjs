import * as angular from 'angular';

export interface IAppComponent {

}

/**
 * @description [To be completed]
 */
export class AppComponent implements IAppComponent {
	
	constructor() {
	
	}
	
}

angular
	.module('app.components')
	.component('app', {
		bindings: {},
		controller: AppComponent,
		template: 'Hello there <h1>hi there</h1> <br> Heloooo'
		// templateUrl: 'app.component.html'
	});
