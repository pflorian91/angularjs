import { Component } from 'angular-ts-decorators';
import { IComponentController } from 'angular';

const template = require('./sidebar.component.html');

@Component({
	selector: 'sidebar',
	template
})

export class SidebarComponent implements IComponentController {

}
