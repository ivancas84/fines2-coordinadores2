import { DataDefinition } from 'src/app/core/class/data-definition';

export class _DesignacionDataDefinition extends DataDefinition {
  entity: string = 'designacion';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = Object.assign({}, row)
    if(('cargo_' in rowCloned)
    ){
      this.stg.setItem('cargo' + rowCloned['cargo_'].id, rowCloned['cargo_']);
      delete rowCloned['cargo_'];
    }
    if(('sede_' in rowCloned)
    && ('domicilio_' in rowCloned['sede_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['sede_']['domicilio_'].id, rowCloned['sede_']['domicilio_']);
      delete rowCloned['sede_']['domicilio_'];
    }
    if(('sede_' in rowCloned)
    && ('tipo_sede_' in rowCloned['sede_'])
    ){
      this.stg.setItem('tipo_sede' + rowCloned['sede_']['tipo_sede_'].id, rowCloned['sede_']['tipo_sede_']);
      delete rowCloned['sede_']['tipo_sede_'];
    }
    if(('sede_' in rowCloned)
    && ('centro_educativo_' in rowCloned['sede_'])
    && ('domicilio_' in rowCloned['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['sede_']['centro_educativo_']['domicilio_'].id, rowCloned['sede_']['centro_educativo_']['domicilio_']);
      delete rowCloned['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('sede_' in rowCloned)
    && ('centro_educativo_' in rowCloned['sede_'])
    ){
      this.stg.setItem('centro_educativo' + rowCloned['sede_']['centro_educativo_'].id, rowCloned['sede_']['centro_educativo_']);
      delete rowCloned['sede_']['centro_educativo_'];
    }
    if(('sede_' in rowCloned)
    && ('coordinador_' in rowCloned['sede_'])
    && ('domicilio_' in rowCloned['sede_']['coordinador_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['sede_']['coordinador_']['domicilio_'].id, rowCloned['sede_']['coordinador_']['domicilio_']);
      delete rowCloned['sede_']['coordinador_']['domicilio_'];
    }
    if(('sede_' in rowCloned)
    && ('coordinador_' in rowCloned['sede_'])
    ){
      this.stg.setItem('persona' + rowCloned['sede_']['coordinador_'].id, rowCloned['sede_']['coordinador_']);
      delete rowCloned['sede_']['coordinador_'];
    }
    if(('sede_' in rowCloned)
    ){
      this.stg.setItem('sede' + rowCloned['sede_'].id, rowCloned['sede_']);
      delete rowCloned['sede_'];
    }
    if(('persona_' in rowCloned)
    && ('domicilio_' in rowCloned['persona_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['persona_']['domicilio_'].id, rowCloned['persona_']['domicilio_']);
      delete rowCloned['persona_']['domicilio_'];
    }
    if(('persona_' in rowCloned)
    ){
      this.stg.setItem('persona' + rowCloned['persona_'].id, rowCloned['persona_']);
      delete rowCloned['persona_'];
    }
    this.stg.setItem("designacion" + rowCloned.id, rowCloned);
  }

}
