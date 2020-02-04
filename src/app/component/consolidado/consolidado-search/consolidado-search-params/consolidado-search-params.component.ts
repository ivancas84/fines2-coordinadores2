import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { ValidatorsService } from '@service/validators/validators.service';
import { SearchParamsComponent } from '@component/search-params/search-params.component';
import { forkJoin } from 'rxjs';
import { Display } from '@class/display';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-consolidado-search-params',
  templateUrl: './consolidado-search-params.component.html',
})
export class ConsolidadoSearchParamsComponent extends SearchParamsComponent {
  readonly entityName = 'comision';

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService) 
  { super(fb, dd, validators); }

  initOptions(): void {
    let obs = [];      

    var ob = this.dd.all('plan', new Display);
    obs.push(ob);

    var ob = this.dd.all('modalidad', new Display);
    obs.push(ob);

    this.options = forkJoin(obs).pipe(
      map(
        options => {
          var o = {};
          o['plan'] = options[0];
          o['modalidad'] = options[1];
          return o;
        }
      )
    );
  }

  initData(): void {
    this.data$.subscribe(
      response => {
        this.setDefaultValues();

        if(!isEmptyObject(response)) {
          var obs = [];

          if(response.sede) {
            var ob = this.dd.getOrNull("sede",response.sede);
            obs.push(ob);
          }

          if(response.comision_siguiente) {
            var ob = this.dd.getOrNull("comision",response.comision_siguiente);
            obs.push(ob);
          }

          if(response.sed_centro_educativo) {
            var ob = this.dd.getOrNull("centro_educativo",response.sed_centro_educativo);
            obs.push(ob);
          }

          if(obs.length){ forkJoin(obs).subscribe( () => this.fieldset.reset(response) ); } 
          else { this.fieldset.reset(response); }
        }
      }
    );
  }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      turno: null,
      division: null,
      anio: null,
      semestre: null,
      autorizada: null,
      apertura: null,
      publicada: null,
      fecha_anio: null,
      fecha_semestre: null,
      sede: null,
      plan: null,
      modalidad: null,
      sed_centro_educativo: null,
    });
    return fg;
  }

}
