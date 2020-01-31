import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ShowComponent } from '@component/show/show.component';
import { first } from 'rxjs/operators';
import { Display } from '@class/display';

@Component({
  selector: 'app-consolidado',
  templateUrl: './consolidado.component.html',
})
export class ConsolidadoComponent extends ShowComponent {

  readonly entityName: string = "curso";

  constructor(
    protected dd: DataDefinitionService, 
    protected route: ActivatedRoute, 
    protected router: Router
  ) {
    super(dd, route, router);
  }

  initDisplay(params){
    this.display = new Display();
    this.display.setConditionParams(params);
    if(!this.display.params.hasOwnProperty("com_fecha_anio")) this.display.params["com_fecha_anio"] = "2020";
    this.condition$.next(this.display.condition);
    this.params$.next(this.display.params);
  }

  

}

