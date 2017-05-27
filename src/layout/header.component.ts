import { Component } from 'angular-ts-decorators';
import { IComponentController } from 'angular';

const template = require('./header.component.html');

@Component({
	selector: 'header',
	template
})

export class HeaderComponent implements IComponentController {

}
