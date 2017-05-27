import { Injectable } from 'angular-ts-decorators';

@Injectable('FoodService')
export class FoodService {
	
	/*@ngInject*/
	constructor(private $http: ng.IHttpService) {
		console.log(`CommentsService register`);
	}
	
	public getFood() {
		return [
			'some food',
		    'potatoes',
		    'tasty rose'
		]; //this.$http.get('assets/mock.json').then(response => response.data);
	};
}
