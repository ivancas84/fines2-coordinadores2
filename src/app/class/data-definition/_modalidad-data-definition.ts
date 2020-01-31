import { DataDefinition } from 'src/app/core/class/data-definition';

export class _ModalidadDataDefinition extends DataDefinition {
  entity: string = 'modalidad';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = Object.assign({}, row)
    this.stg.setItem("modalidad" + rowCloned.id, rowCloned);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["nombre"]) ret = ret.trim() + " " + row["nombre"];

    return ret.trim();
  }
}
