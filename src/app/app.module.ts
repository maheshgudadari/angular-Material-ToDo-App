import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaterialDependencyModule } from '../material-dependency/material-dependency.module';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialDependencyModule,
    AppRoutingModule,
    MatCardModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
