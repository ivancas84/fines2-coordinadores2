import { DataDefinition } from 'src/app/core/class/data-definition';

export class _PlanDataDefinition extends DataDefinition {
  entity: string = 'plan';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = Object.assign({}, row)
    this.stg.setItem("plan" + rowCloned.id, rowCloned);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["orientacion"]) ret = ret.trim() + " " + row["orientacion"];

    if (row["resolucion"]) ret = ret.trim() + " " + row["resolucion"];

    return ret.trim();
  }
}
