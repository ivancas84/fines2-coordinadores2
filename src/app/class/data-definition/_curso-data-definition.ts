import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CursoDataDefinition extends DataDefinition {
  entity: string = 'curso';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = Object.assign({}, row)
    if(('comision_' in rowCloned)
    && ('sede_' in rowCloned['comision_'])
    && ('domicilio_' in rowCloned['comision_']['sede_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['comision_']['sede_']['domicilio_'].id, rowCloned['comision_']['sede_']['domicilio_']);
      delete rowCloned['comision_']['sede_']['domicilio_'];
    }
    if(('comision_' in rowCloned)
    && ('sede_' in rowCloned['comision_'])
    && ('tipo_sede_' in rowCloned['comision_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + rowCloned['comision_']['sede_']['tipo_sede_'].id, rowCloned['comision_']['sede_']['tipo_sede_']);
      delete rowCloned['comision_']['sede_']['tipo_sede_'];
    }
    if(('comision_' in rowCloned)
    && ('sede_' in rowCloned['comision_'])
    && ('centro_educativo_' in rowCloned['comision_']['sede_'])
    && ('domicilio_' in rowCloned['comision_']['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['comision_']['sede_']['centro_educativo_']['domicilio_'].id, rowCloned['comision_']['sede_']['centro_educativo_']['domicilio_']);
      delete rowCloned['comision_']['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('comision_' in rowCloned)
    && ('sede_' in rowCloned['comision_'])
    && ('centro_educativo_' in rowCloned['comision_']['sede_'])
    ){
      this.stg.setItem('centro_educativo' + rowCloned['comision_']['sede_']['centro_educativo_'].id, rowCloned['comision_']['sede_']['centro_educativo_']);
      delete rowCloned['comision_']['sede_']['centro_educativo_'];
    }
    if(('comision_' in rowCloned)
    && ('sede_' in rowCloned['comision_'])
    && ('coordinador_' in rowCloned['comision_']['sede_'])
    && ('domicilio_' in rowCloned['comision_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['comision_']['sede_']['coordinador_']['domicilio_'].id, rowCloned['comision_']['sede_']['coordinador_']['domicilio_']);
      delete rowCloned['comision_']['sede_']['coordinador_']['domicilio_'];
    }
    if(('comision_' in rowCloned)
    && ('sede_' in rowCloned['comision_'])
    && ('coordinador_' in rowCloned['comision_']['sede_'])
    ){
      this.stg.setItem('persona' + rowCloned['comision_']['sede_']['coordinador_'].id, rowCloned['comision_']['sede_']['coordinador_']);
      delete rowCloned['comision_']['sede_']['coordinador_'];
    }
    if(('comision_' in rowCloned)
    && ('sede_' in rowCloned['comision_'])
    ){
      this.stg.setItem('sede' + rowCloned['comision_']['sede_'].id, rowCloned['comision_']['sede_']);
      delete rowCloned['comision_']['sede_'];
    }
    if(('comision_' in rowCloned)
    && ('plan_' in rowCloned['comision_'])
    ){
      this.stg.setItem('plan' + rowCloned['comision_']['plan_'].id, rowCloned['comision_']['plan_']);
      delete rowCloned['comision_']['plan_'];
    }
    if(('comision_' in rowCloned)
    && ('modalidad_' in rowCloned['comision_'])
    ){
      this.stg.setItem('modalidad' + rowCloned['comision_']['modalidad_'].id, rowCloned['comision_']['modalidad_']);
      delete rowCloned['comision_']['modalidad_'];
    }
    if(('comision_' in rowCloned)
    && ('comision_siguiente_' in rowCloned['comision_'])
    && ('sede_' in rowCloned['comision_']['comision_siguiente_'])
    && ('domicilio_' in rowCloned['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['comision_']['comision_siguiente_']['sede_']['domicilio_'].id, rowCloned['comision_']['comision_siguiente_']['sede_']['domicilio_']);
      delete rowCloned['comision_']['comision_siguiente_']['sede_']['domicilio_'];
    }
    if(('comision_' in rowCloned)
    && ('comision_siguiente_' in rowCloned['comision_'])
    && ('sede_' in rowCloned['comision_']['comision_siguiente_'])
    && ('tipo_sede_' in rowCloned['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + rowCloned['comision_']['comision_siguiente_']['sede_']['tipo_sede_'].id, rowCloned['comision_']['comision_siguiente_']['sede_']['tipo_sede_']);
      delete rowCloned['comision_']['comision_siguiente_']['sede_']['tipo_sede_'];
    }
    if(('comision_' in rowCloned)
    && ('comision_siguiente_' in rowCloned['comision_'])
    && ('sede_' in rowCloned['comision_']['comision_siguiente_'])
    && ('centro_educativo_' in rowCloned['comision_']['comision_siguiente_']['sede_'])
    && ('domicilio_' in rowCloned['comision_']['comision_siguiente_']['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'].id, rowCloned['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_']);
      delete rowCloned['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('comision_' in rowCloned)
    && ('comision_siguiente_' in rowCloned['comision_'])
    && ('sede_' in rowCloned['comision_']['comision_siguiente_'])
    && ('centro_educativo_' in rowCloned['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('centro_educativo' + rowCloned['comision_']['comision_siguiente_']['sede_']['centro_educativo_'].id, rowCloned['comision_']['comision_siguiente_']['sede_']['centro_educativo_']);
      delete rowCloned['comision_']['comision_siguiente_']['sede_']['centro_educativo_'];
    }
    if(('comision_' in rowCloned)
    && ('comision_siguiente_' in rowCloned['comision_'])
    && ('sede_' in rowCloned['comision_']['comision_siguiente_'])
    && ('coordinador_' in rowCloned['comision_']['comision_siguiente_']['sede_'])
    && ('domicilio_' in rowCloned['comision_']['comision_siguiente_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['comision_']['comision_siguiente_']['sede_']['coordinador_']['domicilio_'].id, rowCloned['comision_']['comision_siguiente_']['sede_']['coordinador_']['domicilio_']);
      delete rowCloned['comision_']['comision_siguiente_']['sede_']['coordinador_']['domicilio_'];
    }
    if(('comision_' in rowCloned)
    && ('comision_siguiente_' in rowCloned['comision_'])
    && ('sede_' in rowCloned['comision_']['comision_siguiente_'])
    && ('coordinador_' in rowCloned['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('persona' + rowCloned['comision_']['comision_siguiente_']['sede_']['coordinador_'].id, rowCloned['comision_']['comision_siguiente_']['sede_']['coordinador_']);
      delete rowCloned['comision_']['comision_siguiente_']['sede_']['coordinador_'];
    }
    if(('comision_' in rowCloned)
    && ('comision_siguiente_' in rowCloned['comision_'])
    && ('sede_' in rowCloned['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('sede' + rowCloned['comision_']['comision_siguiente_']['sede_'].id, rowCloned['comision_']['comision_siguiente_']['sede_']);
      delete rowCloned['comision_']['comision_siguiente_']['sede_'];
    }
    if(('comision_' in rowCloned)
    && ('comision_siguiente_' in rowCloned['comision_'])
    && ('plan_' in rowCloned['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('plan' + rowCloned['comision_']['comision_siguiente_']['plan_'].id, rowCloned['comision_']['comision_siguiente_']['plan_']);
      delete rowCloned['comision_']['comision_siguiente_']['plan_'];
    }
    if(('comision_' in rowCloned)
    && ('comision_siguiente_' in rowCloned['comision_'])
    && ('modalidad_' in rowCloned['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('modalidad' + rowCloned['comision_']['comision_siguiente_']['modalidad_'].id, rowCloned['comision_']['comision_siguiente_']['modalidad_']);
      delete rowCloned['comision_']['comision_siguiente_']['modalidad_'];
    }
    if(('comision_' in rowCloned)
    && ('comision_siguiente_' in rowCloned['comision_'])
    ){
      this.stg.setItem('comision' + rowCloned['comision_']['comision_siguiente_'].id, rowCloned['comision_']['comision_siguiente_']);
      delete rowCloned['comision_']['comision_siguiente_'];
    }
    if(('comision_' in rowCloned)
    ){
      this.stg.setItem('comision' + rowCloned['comision_'].id, rowCloned['comision_']);
      delete rowCloned['comision_'];
    }
    if(('carga_horaria_' in rowCloned)
    && ('plan_' in rowCloned['carga_horaria_'])
    ){
      this.stg.setItem('plan' + rowCloned['carga_horaria_']['plan_'].id, rowCloned['carga_horaria_']['plan_']);
      delete rowCloned['carga_horaria_']['plan_'];
    }
    if(('carga_horaria_' in rowCloned)
    && ('asignatura_' in rowCloned['carga_horaria_'])
    ){
      this.stg.setItem('asignatura' + rowCloned['carga_horaria_']['asignatura_'].id, rowCloned['carga_horaria_']['asignatura_']);
      delete rowCloned['carga_horaria_']['asignatura_'];
    }
    if(('carga_horaria_' in rowCloned)
    ){
      this.stg.setItem('carga_horaria' + rowCloned['carga_horaria_'].id, rowCloned['carga_horaria_']);
      delete rowCloned['carga_horaria_'];
    }
    this.stg.setItem("curso" + rowCloned.id, rowCloned);
  }

}
