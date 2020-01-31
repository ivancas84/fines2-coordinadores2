import { SedeDataDefinition } from '@class/data-definition/sede-data-definition';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _ComisionDataDefinition extends DataDefinition {
  entity: string = 'comision';

  storage(row: { [index: string]: any }){
    if(!row) return;
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
    if(('plan_' in row)
    ){
      this.stg.setItem('plan' + row['plan_'].id, row['plan_']);
      delete row['plan_'];
    }
    if(('modalidad_' in row)
    ){
      this.stg.setItem('modalidad' + row['modalidad_'].id, row['modalidad_']);
      delete row['modalidad_'];
    }
    if(('comision_siguiente_' in row)
    && ('sede_' in row['comision_siguiente_'])
    && ('domicilio_' in row['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['comision_siguiente_']['sede_']['domicilio_'].id, row['comision_siguiente_']['sede_']['domicilio_']);
      delete row['comision_siguiente_']['sede_']['domicilio_'];
    }
    if(('comision_siguiente_' in row)
    && ('sede_' in row['comision_siguiente_'])
    && ('tipo_sede_' in row['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['comision_siguiente_']['sede_']['tipo_sede_'].id, row['comision_siguiente_']['sede_']['tipo_sede_']);
      delete row['comision_siguiente_']['sede_']['tipo_sede_'];
    }
    if(('comision_siguiente_' in row)
    && ('sede_' in row['comision_siguiente_'])
    && ('centro_educativo_' in row['comision_siguiente_']['sede_'])
    && ('domicilio_' in row['comision_siguiente_']['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + row['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'].id, row['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_']);
      delete row['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('comision_siguiente_' in row)
    && ('sede_' in row['comision_siguiente_'])
    && ('centro_educativo_' in row['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('centro_educativo' + row['comision_siguiente_']['sede_']['centro_educativo_'].id, row['comision_siguiente_']['sede_']['centro_educativo_']);
      delete row['comision_siguiente_']['sede_']['centro_educativo_'];
    }
    if(('comision_siguiente_' in row)
    && ('sede_' in row['comision_siguiente_'])
    && ('coordinador_' in row['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('persona' + row['comision_siguiente_']['sede_']['coordinador_'].id, row['comision_siguiente_']['sede_']['coordinador_']);
      delete row['comision_siguiente_']['sede_']['coordinador_'];
    }
    if(('comision_siguiente_' in row)
    && ('sede_' in row['comision_siguiente_'])
    ){
      this.stg.setItem('sede' + row['comision_siguiente_']['sede_'].id, row['comision_siguiente_']['sede_']);
      delete row['comision_siguiente_']['sede_'];
    }
    if(('comision_siguiente_' in row)
    && ('plan_' in row['comision_siguiente_'])
    ){
      this.stg.setItem('plan' + row['comision_siguiente_']['plan_'].id, row['comision_siguiente_']['plan_']);
      delete row['comision_siguiente_']['plan_'];
    }
    if(('comision_siguiente_' in row)
    && ('modalidad_' in row['comision_siguiente_'])
    ){
      this.stg.setItem('modalidad' + row['comision_siguiente_']['modalidad_'].id, row['comision_siguiente_']['modalidad_']);
      delete row['comision_siguiente_']['modalidad_'];
    }
    if(('comision_siguiente_' in row)
    ){
      this.stg.setItem('comision' + row['comision_siguiente_'].id, row['comision_siguiente_']);
      delete row['comision_siguiente_'];
    }
    this.stg.setItem("comision" + row.id, row);
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
