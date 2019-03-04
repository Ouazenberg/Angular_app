import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutService } from 'services/about.service';
import {Routes, RouterModule} from "@angular/router";
import { GalleryComponent } from './gallery/gallery.component'

const routes:Routes = [
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'', redirectTo:'/about', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
