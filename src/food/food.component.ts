import { Component } from 'angular-ts-decorators';
import { IComponentController } from 'angular';
import { FoodService } from './food.service';

const template = require('./food.component.html');

@Component({
	selector: 'food',
	template
})

export class FoodComponent implements IComponentController {

	private food;
	
	/* @ngInject */
	constructor(private FoodService: FoodService) {
	
	}
	
	public $onInit(): void {
		this.food = this.FoodService.getFood();
	}
}
