import { Component, ɵclearResolutionOfComponentResourcesQueue, OnInit } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin, Observable, Subject, BehaviorSubject } from 'rxjs';
import { Display } from '@class/display';
import { arrayGroupValue } from '@function/array-group-value';
import { arrayColumn } from '@function/array-column';
import { map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-consolidado-table',
  templateUrl: './consolidado-table.component.html',
})
export class ConsolidadoTableComponent extends TableComponent implements OnInit {

  readonly entityName = 'comision';
  curso_$ = {};

  constructor(protected dd: DataDefinitionService) {
    super();
  }

  ngOnInit(): void {
    this.data$.subscribe(
      data => {
        var ids = arrayColumn(data,"id");
        ids.forEach(element => {
          this.curso_$[element] = new BehaviorSubject(null);
        });

        var display = new Display();
        display.condition.push("comision","=",ids);
        display.size = 0;
        this.dd.all("curso", display).subscribe(
          curso_ => {
            curso_.forEach(element => {
              var v = element["comision"];
              this.curso_$[v].next(element);
            });
          }
        )
      }
    );
  }



}
