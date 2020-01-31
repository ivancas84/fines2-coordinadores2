import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CentroEducativoDataDefinition extends DataDefinition {
  entity: string = 'centro_educativo';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('domicilio_' in row)
    ){
      this.stg.setItem('domicilio' + row['domicilio_'].id, row['domicilio_']);
      delete row['domicilio_'];
    }
    this.stg.setItem("centro_educativo" + row.id, row);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["nombre"]) ret = ret.trim() + " " + row["nombre"];

    return ret.trim();
  }
}
