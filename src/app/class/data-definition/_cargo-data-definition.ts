import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CargoDataDefinition extends DataDefinition {
  entity: string = 'cargo';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = Object.assign({}, row)
    this.stg.setItem("cargo" + rowCloned.id, rowCloned);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["descripcion"]) ret = ret.trim() + " " + row["descripcion"];

    return ret.trim();
  }
}
