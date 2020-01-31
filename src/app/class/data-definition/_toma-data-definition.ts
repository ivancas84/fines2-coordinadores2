import { DataDefinition } from 'src/app/core/class/data-definition';

export class _TomaDataDefinition extends DataDefinition {
  entity: string = 'toma';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('sede_' in row['curso_']['comision_'])
    && ('domicilio_' in row['curso_']['comision_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['curso_']['comision_']['sede_']['domicilio_'].id, row['curso_']['comision_']['sede_']['domicilio_']);
      delete row['curso_']['comision_']['sede_']['domicilio_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('sede_' in row['curso_']['comision_'])
    && ('tipo_sede_' in row['curso_']['comision_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['curso_']['comision_']['sede_']['tipo_sede_'].id, row['curso_']['comision_']['sede_']['tipo_sede_']);
      delete row['curso_']['comision_']['sede_']['tipo_sede_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('sede_' in row['curso_']['comision_'])
    && ('centro_educativo_' in row['curso_']['comision_']['sede_'])
    && ('domicilio_' in row['curso_']['comision_']['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + row['curso_']['comision_']['sede_']['centro_educativo_']['domicilio_'].id, row['curso_']['comision_']['sede_']['centro_educativo_']['domicilio_']);
      delete row['curso_']['comision_']['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('sede_' in row['curso_']['comision_'])
    && ('centro_educativo_' in row['curso_']['comision_']['sede_'])
    ){
      this.stg.setItem('centro_educativo' + row['curso_']['comision_']['sede_']['centro_educativo_'].id, row['curso_']['comision_']['sede_']['centro_educativo_']);
      delete row['curso_']['comision_']['sede_']['centro_educativo_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('sede_' in row['curso_']['comision_'])
    && ('coordinador_' in row['curso_']['comision_']['sede_'])
    ){
      this.stg.setItem('persona' + row['curso_']['comision_']['sede_']['coordinador_'].id, row['curso_']['comision_']['sede_']['coordinador_']);
      delete row['curso_']['comision_']['sede_']['coordinador_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('sede_' in row['curso_']['comision_'])
    ){
      this.stg.setItem('sede' + row['curso_']['comision_']['sede_'].id, row['curso_']['comision_']['sede_']);
      delete row['curso_']['comision_']['sede_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('plan_' in row['curso_']['comision_'])
    ){
      this.stg.setItem('plan' + row['curso_']['comision_']['plan_'].id, row['curso_']['comision_']['plan_']);
      delete row['curso_']['comision_']['plan_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('modalidad_' in row['curso_']['comision_'])
    ){
      this.stg.setItem('modalidad' + row['curso_']['comision_']['modalidad_'].id, row['curso_']['comision_']['modalidad_']);
      delete row['curso_']['comision_']['modalidad_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('domicilio_' in row['curso_']['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['curso_']['comision_']['comision_siguiente_']['sede_']['domicilio_'].id, row['curso_']['comision_']['comision_siguiente_']['sede_']['domicilio_']);
      delete row['curso_']['comision_']['comision_siguiente_']['sede_']['domicilio_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('tipo_sede_' in row['curso_']['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['curso_']['comision_']['comision_siguiente_']['sede_']['tipo_sede_'].id, row['curso_']['comision_']['comision_siguiente_']['sede_']['tipo_sede_']);
      delete row['curso_']['comision_']['comision_siguiente_']['sede_']['tipo_sede_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('centro_educativo_' in row['curso_']['comision_']['comision_siguiente_']['sede_'])
    && ('domicilio_' in row['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + row['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'].id, row['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_']);
      delete row['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('centro_educativo_' in row['curso_']['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('centro_educativo' + row['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_'].id, row['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_']);
      delete row['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('coordinador_' in row['curso_']['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('persona' + row['curso_']['comision_']['comision_siguiente_']['sede_']['coordinador_'].id, row['curso_']['comision_']['comision_siguiente_']['sede_']['coordinador_']);
      delete row['curso_']['comision_']['comision_siguiente_']['sede_']['coordinador_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('sede' + row['curso_']['comision_']['comision_siguiente_']['sede_'].id, row['curso_']['comision_']['comision_siguiente_']['sede_']);
      delete row['curso_']['comision_']['comision_siguiente_']['sede_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('plan_' in row['curso_']['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('plan' + row['curso_']['comision_']['comision_siguiente_']['plan_'].id, row['curso_']['comision_']['comision_siguiente_']['plan_']);
      delete row['curso_']['comision_']['comision_siguiente_']['plan_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('modalidad_' in row['curso_']['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('modalidad' + row['curso_']['comision_']['comision_siguiente_']['modalidad_'].id, row['curso_']['comision_']['comision_siguiente_']['modalidad_']);
      delete row['curso_']['comision_']['comision_siguiente_']['modalidad_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    ){
      this.stg.setItem('comision' + row['curso_']['comision_']['comision_siguiente_'].id, row['curso_']['comision_']['comision_siguiente_']);
      delete row['curso_']['comision_']['comision_siguiente_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    ){
      this.stg.setItem('comision' + row['curso_']['comision_'].id, row['curso_']['comision_']);
      delete row['curso_']['comision_'];
    }
    if(('curso_' in row)
    && ('carga_horaria_' in row['curso_'])
    && ('plan_' in row['curso_']['carga_horaria_'])
    ){
      this.stg.setItem('plan' + row['curso_']['carga_horaria_']['plan_'].id, row['curso_']['carga_horaria_']['plan_']);
      delete row['curso_']['carga_horaria_']['plan_'];
    }
    if(('curso_' in row)
    && ('carga_horaria_' in row['curso_'])
    && ('asignatura_' in row['curso_']['carga_horaria_'])
    ){
      this.stg.setItem('asignatura' + row['curso_']['carga_horaria_']['asignatura_'].id, row['curso_']['carga_horaria_']['asignatura_']);
      delete row['curso_']['carga_horaria_']['asignatura_'];
    }
    if(('curso_' in row)
    && ('carga_horaria_' in row['curso_'])
    ){
      this.stg.setItem('carga_horaria' + row['curso_']['carga_horaria_'].id, row['curso_']['carga_horaria_']);
      delete row['curso_']['carga_horaria_'];
    }
    if(('curso_' in row)
    ){
      this.stg.setItem('curso' + row['curso_'].id, row['curso_']);
      delete row['curso_'];
    }
    if(('docente_' in row)
    ){
      this.stg.setItem('persona' + row['docente_'].id, row['docente_']);
      delete row['docente_'];
    }
    if(('reemplazo_' in row)
    ){
      this.stg.setItem('persona' + row['reemplazo_'].id, row['reemplazo_']);
      delete row['reemplazo_'];
    }
    this.stg.setItem("toma" + row.id, row);
  }

}
