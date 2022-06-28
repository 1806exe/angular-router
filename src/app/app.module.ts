import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientRoutingModule } from './client/clinet-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AttachmentComponent } from './client/components/attachment/attachment.component';
import { AcademicComponent } from './client/components/academic/academic.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    AdminHomeComponent,
    ClientHomeComponent,
    AttachmentComponent,
    AcademicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientRoutingModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
