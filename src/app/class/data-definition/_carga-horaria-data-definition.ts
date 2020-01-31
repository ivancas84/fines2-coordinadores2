import { PlanDataDefinition } from '@class/data-definition/plan-data-definition';
import { AsignaturaDataDefinition } from '@class/data-definition/asignatura-data-definition';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CargaHorariaDataDefinition extends DataDefinition {
  entity: string = 'carga_horaria';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('plan_' in row)
    ){
      this.stg.setItem('plan' + row['plan_'].id, row['plan_']);
      delete row['plan_'];
    }
    if(('asignatura_' in row)
    ){
      this.stg.setItem('asignatura' + row['asignatura_'].id, row['asignatura_']);
      delete row['asignatura_'];
    }
    this.stg.setItem("carga_horaria" + row.id, row);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["anio"]) ret = ret.trim() + " " + row["anio"];

    if (row["semestre"]) ret = ret.trim() + " " + row["semestre"];

    if (row["horas_catedra"]) ret = ret.trim() + " " + row["horas_catedra"];

    if(row.plan) {
      var e = new PlanDataDefinition(this.stg, this.parser);
      ret = ret.trim() + " " + e.label(row.plan);
    }
    if(row.asignatura) {
      var e = new AsignaturaDataDefinition(this.stg, this.parser);
      ret = ret.trim() + " " + e.label(row.asignatura);
    }
    return ret.trim();
  }
}
