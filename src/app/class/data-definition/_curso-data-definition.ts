import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CursoDataDefinition extends DataDefinition {
  entity: string = 'curso';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('comision_' in row)
    && ('sede_' in row['comision_'])
    && ('domicilio_' in row['comision_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['comision_']['sede_']['domicilio_'].id, row['comision_']['sede_']['domicilio_']);
      delete row['comision_']['sede_']['domicilio_'];
    }
    if(('comision_' in row)
    && ('sede_' in row['comision_'])
    && ('tipo_sede_' in row['comision_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['comision_']['sede_']['tipo_sede_'].id, row['comision_']['sede_']['tipo_sede_']);
      delete row['comision_']['sede_']['tipo_sede_'];
    }
    if(('comision_' in row)
    && ('sede_' in row['comision_'])
    && ('centro_educativo_' in row['comision_']['sede_'])
    && ('domicilio_' in row['comision_']['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + row['comision_']['sede_']['centro_educativo_']['domicilio_'].id, row['comision_']['sede_']['centro_educativo_']['domicilio_']);
      delete row['comision_']['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('comision_' in row)
    && ('sede_' in row['comision_'])
    && ('centro_educativo_' in row['comision_']['sede_'])
    ){
      this.stg.setItem('centro_educativo' + row['comision_']['sede_']['centro_educativo_'].id, row['comision_']['sede_']['centro_educativo_']);
      delete row['comision_']['sede_']['centro_educativo_'];
    }
    if(('comision_' in row)
    && ('sede_' in row['comision_'])
    && ('coordinador_' in row['comision_']['sede_'])
    ){
      this.stg.setItem('persona' + row['comision_']['sede_']['coordinador_'].id, row['comision_']['sede_']['coordinador_']);
      delete row['comision_']['sede_']['coordinador_'];
    }
    if(('comision_' in row)
    && ('sede_' in row['comision_'])
    ){
      this.stg.setItem('sede' + row['comision_']['sede_'].id, row['comision_']['sede_']);
      delete row['comision_']['sede_'];
    }
    if(('comision_' in row)
    && ('plan_' in row['comision_'])
    ){
      this.stg.setItem('plan' + row['comision_']['plan_'].id, row['comision_']['plan_']);
      delete row['comision_']['plan_'];
    }
    if(('comision_' in row)
    && ('modalidad_' in row['comision_'])
    ){
      this.stg.setItem('modalidad' + row['comision_']['modalidad_'].id, row['comision_']['modalidad_']);
      delete row['comision_']['modalidad_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('sede_' in row['comision_']['comision_siguiente_'])
    && ('domicilio_' in row['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['comision_']['comision_siguiente_']['sede_']['domicilio_'].id, row['comision_']['comision_siguiente_']['sede_']['domicilio_']);
      delete row['comision_']['comision_siguiente_']['sede_']['domicilio_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('sede_' in row['comision_']['comision_siguiente_'])
    && ('tipo_sede_' in row['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['comision_']['comision_siguiente_']['sede_']['tipo_sede_'].id, row['comision_']['comision_siguiente_']['sede_']['tipo_sede_']);
      delete row['comision_']['comision_siguiente_']['sede_']['tipo_sede_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('sede_' in row['comision_']['comision_siguiente_'])
    && ('centro_educativo_' in row['comision_']['comision_siguiente_']['sede_'])
    && ('domicilio_' in row['comision_']['comision_siguiente_']['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + row['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'].id, row['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_']);
      delete row['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('sede_' in row['comision_']['comision_siguiente_'])
    && ('centro_educativo_' in row['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('centro_educativo' + row['comision_']['comision_siguiente_']['sede_']['centro_educativo_'].id, row['comision_']['comision_siguiente_']['sede_']['centro_educativo_']);
      delete row['comision_']['comision_siguiente_']['sede_']['centro_educativo_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('sede_' in row['comision_']['comision_siguiente_'])
    && ('coordinador_' in row['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('persona' + row['comision_']['comision_siguiente_']['sede_']['coordinador_'].id, row['comision_']['comision_siguiente_']['sede_']['coordinador_']);
      delete row['comision_']['comision_siguiente_']['sede_']['coordinador_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('sede_' in row['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('sede' + row['comision_']['comision_siguiente_']['sede_'].id, row['comision_']['comision_siguiente_']['sede_']);
      delete row['comision_']['comision_siguiente_']['sede_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('plan_' in row['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('plan' + row['comision_']['comision_siguiente_']['plan_'].id, row['comision_']['comision_siguiente_']['plan_']);
      delete row['comision_']['comision_siguiente_']['plan_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('modalidad_' in row['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('modalidad' + row['comision_']['comision_siguiente_']['modalidad_'].id, row['comision_']['comision_siguiente_']['modalidad_']);
      delete row['comision_']['comision_siguiente_']['modalidad_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    ){
      this.stg.setItem('comision' + row['comision_']['comision_siguiente_'].id, row['comision_']['comision_siguiente_']);
      delete row['comision_']['comision_siguiente_'];
    }
    if(('comision_' in row)
    ){
      this.stg.setItem('comision' + row['comision_'].id, row['comision_']);
      delete row['comision_'];
    }
    if(('carga_horaria_' in row)
    && ('plan_' in row['carga_horaria_'])
    ){
      this.stg.setItem('plan' + row['carga_horaria_']['plan_'].id, row['carga_horaria_']['plan_']);
      delete row['carga_horaria_']['plan_'];
    }
    if(('carga_horaria_' in row)
    && ('asignatura_' in row['carga_horaria_'])
    ){
      this.stg.setItem('asignatura' + row['carga_horaria_']['asignatura_'].id, row['carga_horaria_']['asignatura_']);
      delete row['carga_horaria_']['asignatura_'];
    }
    if(('carga_horaria_' in row)
    ){
      this.stg.setItem('carga_horaria' + row['carga_horaria_'].id, row['carga_horaria_']);
      delete row['carga_horaria_'];
    }
    this.stg.setItem("curso" + row.id, row);
  }

}
