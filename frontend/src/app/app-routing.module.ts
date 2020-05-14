import { BuscaComponent } from './components/template/busca/busca.component';
import { MainComponent } from './components/template/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: "",
  component: MainComponent
},{
  path: "busca/:id",
  component: BuscaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
