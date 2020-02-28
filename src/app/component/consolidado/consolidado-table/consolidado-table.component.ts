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
  toma_$ = {};

  constructor(protected dd: DataDefinitionService) {
    super();
  }

  ngOnInit(): void {
    this.data$.subscribe(
      data => {
        if(data && data.length){
          var ids = arrayColumn(data,"id");
          ids.forEach(id => {
            this.curso_$[id] = new BehaviorSubject([]);
          });

          var display = new Display();
          display.condition.push("comision","=",ids);
          display.size = 0;
          this.dd.all("curso", display).subscribe(
            curso_ => {
              var idsCurso = arrayColumn(curso_,"id");

              curso_.forEach(element => {
                var v = element["comision"];
                var v_ = this.curso_$[v].value;
                v_.push(element);
                this.curso_$[v].next(v_);
              });

              var ids = arrayColumn(curso_,"id");
              ids.forEach(id => {
                this.toma_$[id] = new BehaviorSubject([]);
              });

              var display = new Display();
              display.condition.push("curso","=",ids);
              display.size = 0;
              this.dd.all("toma", display).subscribe(
                toma_ => {
                  toma_.forEach(element => {
                    var idcurso = element["curso"];
                    var v = this.toma_$[idcurso].value;
                    v.push(element);
                    this.toma_$[idcurso].next(v);
                  });
                }
              );

            }
          )
        }
      }
    );
  }


  toma(idcurso){
  /**
   * Se define un metodo para evitar el error de pasaje a produccion: Object is possibly 'null'
   */
    var t;
    this.toma_$[idcurso].subscribe(
      toma => { t = toma; }
    );
    return t;
  }



}
