import { NgModule } from 'angular-ts-decorators';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { FooterComponent } from './footer.component';

@NgModule({
	name: 'LayoutModule',
	declarations: [
		HeaderComponent,
	    SidebarComponent,
	    FooterComponent
	],
	providers: [
	]
})

export class LayoutModule {}
