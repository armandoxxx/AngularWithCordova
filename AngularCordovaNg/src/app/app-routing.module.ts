import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CameraComponent} from "./pages/camera/camera.component";
import {NotifyComponent} from "./pages/notify/notify.component";
import {DataComponent} from "./pages/data/data.component";

const routes: Routes = [
  {path: 'camera', component: CameraComponent},
  {path: 'data', component: DataComponent},
  {path: 'notify', component: NotifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
