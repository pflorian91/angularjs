import { Component } from 'angular-ts-decorators';
import { IComponentController } from 'angular';

const template = require('./footer.component.html');

@Component({
	selector: 'footer',
	template
})

export class FooterComponent implements IComponentController {

}
