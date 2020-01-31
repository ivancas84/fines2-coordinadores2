import { DataDefinition } from 'src/app/core/class/data-definition';

export class _SedeDataDefinition extends DataDefinition {
  entity: string = 'sede';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('domicilio_' in row)
    ){
      this.stg.setItem('domicilio' + row['domicilio_'].id, row['domicilio_']);
      delete row['domicilio_'];
    }
    if(('tipo_sede_' in row)
    ){
      this.stg.setItem('tipo_sede' + row['tipo_sede_'].id, row['tipo_sede_']);
      delete row['tipo_sede_'];
    }
    if(('centro_educativo_' in row)
    && ('domicilio_' in row['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + row['centro_educativo_']['domicilio_'].id, row['centro_educativo_']['domicilio_']);
      delete row['centro_educativo_']['domicilio_'];
    }
    if(('centro_educativo_' in row)
    ){
      this.stg.setItem('centro_educativo' + row['centro_educativo_'].id, row['centro_educativo_']);
      delete row['centro_educativo_'];
    }
    if(('coordinador_' in row)
    ){
      this.stg.setItem('persona' + row['coordinador_'].id, row['coordinador_']);
      delete row['coordinador_'];
    }
    this.stg.setItem("sede" + row.id, row);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["numero"]) ret = ret.trim() + " " + row["numero"];

    if (row["nombre"]) ret = ret.trim() + " " + row["nombre"];

    return ret.trim();
  }
}
