import { FooterComponent } from '../core/footer/footer.component';
import { HeaderComponent } from '../core/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { routes } from 'src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],

  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild(routes),
  ],

  exports: [HeaderComponent, FooterComponent, MDBBootstrapModule],
})
export class CoreModule {}
