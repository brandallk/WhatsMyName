import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { NameService } from './services/name-service.service';


import { AppComponent } from './app.component';
import { FirstNameComponent } from './components/first-name/first-name.component';
import { LastNameComponent } from './components/last-name/last-name.component';
import { FullNameRevealerComponent } from './components/full-name-revealer/full-name-revealer.component';


const routes: Routes = [
  { path: 'first-name', component: FirstNameComponent },
  { path: 'last-name', component: LastNameComponent },
  { path: '', redirectTo: '/first-name', pathMatch: 'full' },
  { path: '**', component: FirstNameComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FirstNameComponent,
    LastNameComponent,
    FullNameRevealerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    NameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
