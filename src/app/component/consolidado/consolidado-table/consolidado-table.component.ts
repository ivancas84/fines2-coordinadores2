import { Component, ɵclearResolutionOfComponentResourcesQueue, OnInit } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin, Observable } from 'rxjs';
import { Display } from '@class/display';
import { arrayGroupValue } from '@function/array-group-value';
import { arrayColumn } from '@function/array-column';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-consolidado-table',
  templateUrl: './consolidado-table.component.html',
})
export class ConsolidadoTableComponent extends TableComponent implements OnInit {

  readonly entityName = 'comision';
  curso_$: Observable<any>;

  constructor(protected dd: DataDefinitionService) {
    super();
  }

  ngOnInit(): void {
    this.data$.pipe(map(
      data => {
        var ids = arrayColumn(data,"id");
        console.log(ids);
        var display = new Display();
        display.condition.push("comision","=",ids);
        //this.curso_$ = 

        //console.log(data);

        //console.log("teset");
        // this.comisiones = arrayColumn(data,"comision");    
        // this.cursos = arrayGroupValue(data,"comision");    
        //return data;
      }
    ));
    

    //
    //throw new Error("Method not implemented.");
  }



}
