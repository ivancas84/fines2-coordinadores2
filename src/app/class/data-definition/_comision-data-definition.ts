import { SedeDataDefinition } from '@class/data-definition/sede-data-definition';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _ComisionDataDefinition extends DataDefinition {
  entity: string = 'comision';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = Object.assign({}, row)
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
    if(('plan_' in rowCloned)
    ){
      this.stg.setItem('plan' + rowCloned['plan_'].id, rowCloned['plan_']);
      delete rowCloned['plan_'];
    }
    if(('modalidad_' in rowCloned)
    ){
      this.stg.setItem('modalidad' + rowCloned['modalidad_'].id, rowCloned['modalidad_']);
      delete rowCloned['modalidad_'];
    }
    if(('comision_siguiente_' in rowCloned)
    && ('sede_' in rowCloned['comision_siguiente_'])
    && ('domicilio_' in rowCloned['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['comision_siguiente_']['sede_']['domicilio_'].id, rowCloned['comision_siguiente_']['sede_']['domicilio_']);
      delete rowCloned['comision_siguiente_']['sede_']['domicilio_'];
    }
    if(('comision_siguiente_' in rowCloned)
    && ('sede_' in rowCloned['comision_siguiente_'])
    && ('tipo_sede_' in rowCloned['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + rowCloned['comision_siguiente_']['sede_']['tipo_sede_'].id, rowCloned['comision_siguiente_']['sede_']['tipo_sede_']);
      delete rowCloned['comision_siguiente_']['sede_']['tipo_sede_'];
    }
    if(('comision_siguiente_' in rowCloned)
    && ('sede_' in rowCloned['comision_siguiente_'])
    && ('centro_educativo_' in rowCloned['comision_siguiente_']['sede_'])
    && ('domicilio_' in rowCloned['comision_siguiente_']['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'].id, rowCloned['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_']);
      delete rowCloned['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('comision_siguiente_' in rowCloned)
    && ('sede_' in rowCloned['comision_siguiente_'])
    && ('centro_educativo_' in rowCloned['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('centro_educativo' + rowCloned['comision_siguiente_']['sede_']['centro_educativo_'].id, rowCloned['comision_siguiente_']['sede_']['centro_educativo_']);
      delete rowCloned['comision_siguiente_']['sede_']['centro_educativo_'];
    }
    if(('comision_siguiente_' in rowCloned)
    && ('sede_' in rowCloned['comision_siguiente_'])
    && ('coordinador_' in rowCloned['comision_siguiente_']['sede_'])
    && ('domicilio_' in rowCloned['comision_siguiente_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['comision_siguiente_']['sede_']['coordinador_']['domicilio_'].id, rowCloned['comision_siguiente_']['sede_']['coordinador_']['domicilio_']);
      delete rowCloned['comision_siguiente_']['sede_']['coordinador_']['domicilio_'];
    }
    if(('comision_siguiente_' in rowCloned)
    && ('sede_' in rowCloned['comision_siguiente_'])
    && ('coordinador_' in rowCloned['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('persona' + rowCloned['comision_siguiente_']['sede_']['coordinador_'].id, rowCloned['comision_siguiente_']['sede_']['coordinador_']);
      delete rowCloned['comision_siguiente_']['sede_']['coordinador_'];
    }
    if(('comision_siguiente_' in rowCloned)
    && ('sede_' in rowCloned['comision_siguiente_'])
    ){
      this.stg.setItem('sede' + rowCloned['comision_siguiente_']['sede_'].id, rowCloned['comision_siguiente_']['sede_']);
      delete rowCloned['comision_siguiente_']['sede_'];
    }
    if(('comision_siguiente_' in rowCloned)
    && ('plan_' in rowCloned['comision_siguiente_'])
    ){
      this.stg.setItem('plan' + rowCloned['comision_siguiente_']['plan_'].id, rowCloned['comision_siguiente_']['plan_']);
      delete rowCloned['comision_siguiente_']['plan_'];
    }
    if(('comision_siguiente_' in rowCloned)
    && ('modalidad_' in rowCloned['comision_siguiente_'])
    ){
      this.stg.setItem('modalidad' + rowCloned['comision_siguiente_']['modalidad_'].id, rowCloned['comision_siguiente_']['modalidad_']);
      delete rowCloned['comision_siguiente_']['modalidad_'];
    }
    if(('comision_siguiente_' in rowCloned)
    ){
      this.stg.setItem('comision' + rowCloned['comision_siguiente_'].id, rowCloned['comision_siguiente_']);
      delete rowCloned['comision_siguiente_'];
    }
    this.stg.setItem("comision" + rowCloned.id, rowCloned);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["division"]) ret = ret.trim() + " " + row["division"];

    if (row["anio"]) ret = ret.trim() + " " + row["anio"];

    if (row["semestre"]) ret = ret.trim() + " " + row["semestre"];

    if(row.sede) {
      var e = new SedeDataDefinition(this.stg, this.parser);
      ret = ret.trim() + " " + e.label(row.sede);
    }
    return ret.trim();
  }
}
