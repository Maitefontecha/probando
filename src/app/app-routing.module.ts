import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';


const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'blog',component:BlogComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'anuncios',component:AnunciosComponent},
  {path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
