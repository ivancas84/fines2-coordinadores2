import { DataDefinition } from 'src/app/core/class/data-definition';

export class _DiaDataDefinition extends DataDefinition {
  entity: string = 'dia';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = Object.assign({}, row)
    this.stg.setItem("dia" + rowCloned.id, rowCloned);
  }

}
