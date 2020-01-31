import { DataDefinition } from 'src/app/core/class/data-definition';

export class _DesignacionDataDefinition extends DataDefinition {
  entity: string = 'designacion';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('cargo_' in row)
    ){
      this.stg.setItem('cargo' + row['cargo_'].id, row['cargo_']);
      delete row['cargo_'];
    }
    if(('sede_' in row)
    && ('domicilio_' in row['sede_'])
    ){
      this.stg.setItem('domicilio' + row['sede_']['domicilio_'].id, row['sede_']['domicilio_']);
      delete row['sede_']['domicilio_'];
    }
    if(('sede_' in row)
    && ('tipo_sede_' in row['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['sede_']['tipo_sede_'].id, row['sede_']['tipo_sede_']);
      delete row['sede_']['tipo_sede_'];
    }
    if(('sede_' in row)
    && ('centro_educativo_' in row['sede_'])
    && ('domicilio_' in row['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + row['sede_']['centro_educativo_']['domicilio_'].id, row['sede_']['centro_educativo_']['domicilio_']);
      delete row['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('sede_' in row)
    && ('centro_educativo_' in row['sede_'])
    ){
      this.stg.setItem('centro_educativo' + row['sede_']['centro_educativo_'].id, row['sede_']['centro_educativo_']);
      delete row['sede_']['centro_educativo_'];
    }
    if(('sede_' in row)
    && ('coordinador_' in row['sede_'])
    ){
      this.stg.setItem('persona' + row['sede_']['coordinador_'].id, row['sede_']['coordinador_']);
      delete row['sede_']['coordinador_'];
    }
    if(('sede_' in row)
    ){
      this.stg.setItem('sede' + row['sede_'].id, row['sede_']);
      delete row['sede_'];
    }
    if(('persona_' in row)
    ){
      this.stg.setItem('persona' + row['persona_'].id, row['persona_']);
      delete row['persona_'];
    }
    this.stg.setItem("designacion" + row.id, row);
  }

}
