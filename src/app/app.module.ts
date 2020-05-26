import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { 
  NgbModule,
  NgbDateAdapter, 
  // NgbCollapseModule, 
  // NgbDropdownModule,
  // NgbPaginationModule,
  // NgbAccordionModule,
  // NgbTypeaheadModule,
  // NgbToastModule,
  NgbDatepickerModule,
  NgbDateParserFormatter,
  // NgbTimepickerModule,
  NgbTimeAdapter,
} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LabelPipe } from '@pipe/label.pipe';
import { ToDatePipe } from '@pipe/to-date.pipe';
import { ToTimePipe } from '@pipe/to-time.pipe';
import { SiNoPipe } from '@pipe/si-no.pipe';
import { StoragePipe } from '@pipe/storage.pipe';
import { SummaryPipe } from '@pipe/summary.pipe';
import { SearchAllComponent } from '@component/search-all/search-all.component';
import { PaginationComponent } from '@component/pagination/pagination.component';
import { MessagesComponent } from '@component/messages/messages.component';
import { FilterTypeaheadComponent } from '@component/filter-typeahead/filter-typeahead.component';
import { FieldsetTypeaheadComponent } from '@component/fieldset-typeahead/fieldset-typeahead.component';
import { ModalConfirmComponent } from '@component/modal-confirm/modal-confirm.component';
import { ToastsComponent } from '@component/toasts/toasts.component';
import { MessageService } from '@service/message/message.service';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { ToastService } from '@service/ng-bootstrap/toast.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { NgbIsoDateAdapter } from '@service/ng-bootstrap/ngb-iso-date-adapter';
import { NgbDateCustomParserFormatter } from '@service/ng-bootstrap/dateformat';
import { ParserService } from '@service/parser/parser.service';
import { UploadComponent } from '@component/upload/upload.component';
import { DownloadComponent } from '@component/download/download.component';
import { NgbStringTimeAdapter } from '@service/ng-bootstrap/ngb-string-time-adapter';

import { DataDefinitionLoaderService } from '@service/data-definition-loader.service';
import { MenuComponent } from '@component/menu/menu.component';

import { ConsolidadoComponent } from '@component/consolidado/consolidado/consolidado.component';
import { ConsolidadoTableComponent } from '@component/consolidado/consolidado-table/consolidado-table.component';
import { ConsolidadoSearchComponent } from '@component/consolidado/consolidado-search/consolidado-search/consolidado-search.component';
import { ConsolidadoSearchParamsComponent } from '@component/consolidado/consolidado-search/consolidado-search-params/consolidado-search-params.component';
import { GrillaSearchComponent } from '@component/grilla-search/grilla-search/grilla-search.component';
import { GrillaSearchParamsComponent } from '@component/grilla-search/grilla-search-params/grilla-search-params.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LabelPipe, ToDatePipe, ToTimePipe, SiNoPipe, SummaryPipe, StoragePipe,
    SearchAllComponent,
    PaginationComponent,
    MessagesComponent,
    FilterTypeaheadComponent, FieldsetTypeaheadComponent,
    ModalConfirmComponent,
    ToastsComponent,
    UploadComponent,
    DownloadComponent,

    ConsolidadoComponent, ConsolidadoTableComponent, ConsolidadoSearchComponent, ConsolidadoSearchParamsComponent,
    GrillaSearchComponent, GrillaSearchParamsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    ReactiveFormsModule,
    NgbModule
    //NgbToastModule, NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbAccordionModule, NgbTypeaheadModule, NgbDatepickerModule, NgbTimepickerModule
  ],
  providers: [
    MessageService, DataDefinitionService, DataDefinitionLoaderService, SessionStorageService, ParserService, 
    ToastService, ValidatorsService,
    {provide: NgbDateAdapter, useClass: NgbIsoDateAdapter}, 
    {provide: NgbTimeAdapter, useClass: NgbStringTimeAdapter},
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
