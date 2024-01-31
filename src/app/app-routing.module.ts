import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './component/result/result.component';
import { LayoutComponent } from './shared/component/layout/layout.component';
const routes: Routes = [

 {
  path: '',
  redirectTo: '/result', // Redirect to result by default
  pathMatch: 'full'
},
  {
    path:'',
    component: LayoutComponent,




    children: [

    {
      path:'result',
      component: ResultComponent,

    }


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
