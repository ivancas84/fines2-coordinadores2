import { DataDefinition } from 'src/app/core/class/data-definition';

export class _AsignaturaDataDefinition extends DataDefinition {
  entity: string = 'asignatura';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("asignatura" + row.id, row);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["nombre"]) ret = ret.trim() + " " + row["nombre"];

    return ret.trim();
  }
}
