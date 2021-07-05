import { ModuleWithProviders, NgModule } from '@angular/core';
import { DatalibraryComponent } from './datalibrary.component';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import {  DatalibraryService } from './datalibrary.service';



@NgModule({
  declarations: [DatalibraryComponent],
  imports: [HttpClientModule,CommonModule, ],
  exports: [DatalibraryComponent]
})
export class DatalibraryModule {
static forRoot():ModuleWithProviders<DatalibraryModule>
{

    return{
      ngModule: DatalibraryModule,
      providers: [DatalibraryService,]
    }
}

 }
