import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientComponent } from './client.component';
import { AcademicComponent } from './components/academic/academic.component';
import { AttachmentComponent } from './components/attachment/attachment.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: ClientHomeComponent,
      },
      {
        path: 'academic',
        component: AcademicComponent,
      },
      {
        path: 'attachment',
        component: AttachmentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
