import { DataDefinition } from 'src/app/core/class/data-definition';

export class _PersonaDataDefinition extends DataDefinition {
  entity: string = 'persona';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("persona" + row.id, row);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["nombres"]) ret = ret.trim() + " " + row["nombres"];

    if (row["apellidos"]) ret = ret.trim() + " " + row["apellidos"];

    if (row["numero_documento"]) ret = ret.trim() + " " + row["numero_documento"];

    return ret.trim();
  }
}
