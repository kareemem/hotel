import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderInterceptor } from './loader.interceptor';
import { TitlePipe } from './title.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsComponent } from './details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TitlePipe,
    DetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    NgxSpinnerModule.forRoot({type:'ball-clip-rotate-multiple'}),
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:LoaderInterceptor,
      multi:true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
