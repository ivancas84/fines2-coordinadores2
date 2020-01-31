import { Component, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin, Observable } from 'rxjs';
import { Display } from '@class/display';
import { arrayGroupValue } from '@function/array_group_value';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-consolidado-table',
  templateUrl: './consolidado-table.component.html',
})
export class ConsolidadoTableComponent extends TableComponent {

  readonly entityName = 'curso';

  curso_$: Observable<any>;

  constructor(protected dd: DataDefinitionService) {
    super();
  }



}
