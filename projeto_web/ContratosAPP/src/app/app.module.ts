import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule} from 'ngx-bootstrap/modal';
import { TooltipModule} from 'ngx-bootstrap/tooltip';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContratosComponent } from './contratos/contratos.component';
import { NavComponent } from './nav/nav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// RECOMMENDED
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    ContratosComponent,
    NavComponent
   ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
