import { Component } from 'angular-ts-decorators';
import { IComponentController } from 'angular';

const template = require('./app.component.html');

@Component({
	selector: 'app',
	template
})

export class AppComponent implements IComponentController {

}
