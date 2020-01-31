import { DataDefinition } from 'src/app/core/class/data-definition';

export class _TipoSedeDataDefinition extends DataDefinition {
  entity: string = 'tipo_sede';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("tipo_sede" + row.id, row);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["descripcion"]) ret = ret.trim() + " " + row["descripcion"];

    return ret.trim();
  }
}
