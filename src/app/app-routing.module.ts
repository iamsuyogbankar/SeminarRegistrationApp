import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AdminviewComponent } from './adminview/adminview.component';

const routes: Routes = [
  {path:'', component: RegistrationComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'adminview', component: AdminviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
