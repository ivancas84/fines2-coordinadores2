import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ShowComponent } from '@component/show/show.component';
import { first } from 'rxjs/operators';
import { Display } from '@class/display';
import { isEmptyObject } from '@function/is-empty-object.function';

@Component({
  selector: 'app-consolidado',
  templateUrl: './consolidado.component.html',
})
export class ConsolidadoComponent extends ShowComponent {

  readonly entityName: string = "comision";

  constructor(
    protected dd: DataDefinitionService, 
    protected route: ActivatedRoute, 
    protected router: Router
  ) {
    super(dd, route, router);
  }

  initDisplay(params){
    this.display = new Display();
    this.display.setByParams(params);
    if(isEmptyObject(this.display.order)) this.display.order = {
      "sed_numero":"asc",
      "anio":"asc",
      "semestre":"asc",
    }

    if(!this.display.params.hasOwnProperty("fecha_anio")) this.display.params["fecha_anio"] = "2020";
    if(!this.display.params.hasOwnProperty("fecha_anio")) this.display.params["fecha_anio"] = "2020";
    this.condition$.next(this.display.condition);
    this.params$.next(this.display.params);
  }

  

}

