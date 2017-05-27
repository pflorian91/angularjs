import { NgModule } from 'angular-ts-decorators';
import { FoodComponent } from './food.component';
import { FoodService } from './food.service';

@NgModule({
	name: 'FoodModule',
	declarations: [
		FoodComponent
	],
	providers: [
		FoodService
	]
})

export class FoodModule {}
