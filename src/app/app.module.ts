import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NotFoundError } from 'rxjs';


const routes: Routes =[
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent },
  {path:'menu',component:MenuComponent},
  {path:'acercade',component:AcercaDeComponent},
  {path:'pedidos',component:PedidosComponent},
  {path:'contactanos',component:ContactanosComponent},
  {path:'**',component:NotFoundError}
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AcercaDeComponent,
    PedidosComponent,
    ContactanosComponent,
    FilterPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
