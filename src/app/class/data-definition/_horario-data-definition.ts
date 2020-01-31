import { DataDefinition } from 'src/app/core/class/data-definition';

export class _HorarioDataDefinition extends DataDefinition {
  entity: string = 'horario';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = Object.assign({}, row)
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('sede_' in rowCloned['curso_']['comision_'])
    && ('domicilio_' in rowCloned['curso_']['comision_']['sede_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['curso_']['comision_']['sede_']['domicilio_'].id, rowCloned['curso_']['comision_']['sede_']['domicilio_']);
      delete rowCloned['curso_']['comision_']['sede_']['domicilio_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('sede_' in rowCloned['curso_']['comision_'])
    && ('tipo_sede_' in rowCloned['curso_']['comision_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + rowCloned['curso_']['comision_']['sede_']['tipo_sede_'].id, rowCloned['curso_']['comision_']['sede_']['tipo_sede_']);
      delete rowCloned['curso_']['comision_']['sede_']['tipo_sede_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('sede_' in rowCloned['curso_']['comision_'])
    && ('centro_educativo_' in rowCloned['curso_']['comision_']['sede_'])
    && ('domicilio_' in rowCloned['curso_']['comision_']['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['curso_']['comision_']['sede_']['centro_educativo_']['domicilio_'].id, rowCloned['curso_']['comision_']['sede_']['centro_educativo_']['domicilio_']);
      delete rowCloned['curso_']['comision_']['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('sede_' in rowCloned['curso_']['comision_'])
    && ('centro_educativo_' in rowCloned['curso_']['comision_']['sede_'])
    ){
      this.stg.setItem('centro_educativo' + rowCloned['curso_']['comision_']['sede_']['centro_educativo_'].id, rowCloned['curso_']['comision_']['sede_']['centro_educativo_']);
      delete rowCloned['curso_']['comision_']['sede_']['centro_educativo_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('sede_' in rowCloned['curso_']['comision_'])
    && ('coordinador_' in rowCloned['curso_']['comision_']['sede_'])
    && ('domicilio_' in rowCloned['curso_']['comision_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['curso_']['comision_']['sede_']['coordinador_']['domicilio_'].id, rowCloned['curso_']['comision_']['sede_']['coordinador_']['domicilio_']);
      delete rowCloned['curso_']['comision_']['sede_']['coordinador_']['domicilio_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('sede_' in rowCloned['curso_']['comision_'])
    && ('coordinador_' in rowCloned['curso_']['comision_']['sede_'])
    ){
      this.stg.setItem('persona' + rowCloned['curso_']['comision_']['sede_']['coordinador_'].id, rowCloned['curso_']['comision_']['sede_']['coordinador_']);
      delete rowCloned['curso_']['comision_']['sede_']['coordinador_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('sede_' in rowCloned['curso_']['comision_'])
    ){
      this.stg.setItem('sede' + rowCloned['curso_']['comision_']['sede_'].id, rowCloned['curso_']['comision_']['sede_']);
      delete rowCloned['curso_']['comision_']['sede_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('plan_' in rowCloned['curso_']['comision_'])
    ){
      this.stg.setItem('plan' + rowCloned['curso_']['comision_']['plan_'].id, rowCloned['curso_']['comision_']['plan_']);
      delete rowCloned['curso_']['comision_']['plan_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('modalidad_' in rowCloned['curso_']['comision_'])
    ){
      this.stg.setItem('modalidad' + rowCloned['curso_']['comision_']['modalidad_'].id, rowCloned['curso_']['comision_']['modalidad_']);
      delete rowCloned['curso_']['comision_']['modalidad_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('comision_siguiente_' in rowCloned['curso_']['comision_'])
    && ('sede_' in rowCloned['curso_']['comision_']['comision_siguiente_'])
    && ('domicilio_' in rowCloned['curso_']['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['domicilio_'].id, rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['domicilio_']);
      delete rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['domicilio_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('comision_siguiente_' in rowCloned['curso_']['comision_'])
    && ('sede_' in rowCloned['curso_']['comision_']['comision_siguiente_'])
    && ('tipo_sede_' in rowCloned['curso_']['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['tipo_sede_'].id, rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['tipo_sede_']);
      delete rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['tipo_sede_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('comision_siguiente_' in rowCloned['curso_']['comision_'])
    && ('sede_' in rowCloned['curso_']['comision_']['comision_siguiente_'])
    && ('centro_educativo_' in rowCloned['curso_']['comision_']['comision_siguiente_']['sede_'])
    && ('domicilio_' in rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'].id, rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_']);
      delete rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_']['domicilio_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('comision_siguiente_' in rowCloned['curso_']['comision_'])
    && ('sede_' in rowCloned['curso_']['comision_']['comision_siguiente_'])
    && ('centro_educativo_' in rowCloned['curso_']['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('centro_educativo' + rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_'].id, rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_']);
      delete rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['centro_educativo_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('comision_siguiente_' in rowCloned['curso_']['comision_'])
    && ('sede_' in rowCloned['curso_']['comision_']['comision_siguiente_'])
    && ('coordinador_' in rowCloned['curso_']['comision_']['comision_siguiente_']['sede_'])
    && ('domicilio_' in rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('domicilio' + rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['coordinador_']['domicilio_'].id, rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['coordinador_']['domicilio_']);
      delete rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['coordinador_']['domicilio_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('comision_siguiente_' in rowCloned['curso_']['comision_'])
    && ('sede_' in rowCloned['curso_']['comision_']['comision_siguiente_'])
    && ('coordinador_' in rowCloned['curso_']['comision_']['comision_siguiente_']['sede_'])
    ){
      this.stg.setItem('persona' + rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['coordinador_'].id, rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['coordinador_']);
      delete rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']['coordinador_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('comision_siguiente_' in rowCloned['curso_']['comision_'])
    && ('sede_' in rowCloned['curso_']['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('sede' + rowCloned['curso_']['comision_']['comision_siguiente_']['sede_'].id, rowCloned['curso_']['comision_']['comision_siguiente_']['sede_']);
      delete rowCloned['curso_']['comision_']['comision_siguiente_']['sede_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('comision_siguiente_' in rowCloned['curso_']['comision_'])
    && ('plan_' in rowCloned['curso_']['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('plan' + rowCloned['curso_']['comision_']['comision_siguiente_']['plan_'].id, rowCloned['curso_']['comision_']['comision_siguiente_']['plan_']);
      delete rowCloned['curso_']['comision_']['comision_siguiente_']['plan_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('comision_siguiente_' in rowCloned['curso_']['comision_'])
    && ('modalidad_' in rowCloned['curso_']['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('modalidad' + rowCloned['curso_']['comision_']['comision_siguiente_']['modalidad_'].id, rowCloned['curso_']['comision_']['comision_siguiente_']['modalidad_']);
      delete rowCloned['curso_']['comision_']['comision_siguiente_']['modalidad_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    && ('comision_siguiente_' in rowCloned['curso_']['comision_'])
    ){
      this.stg.setItem('comision' + rowCloned['curso_']['comision_']['comision_siguiente_'].id, rowCloned['curso_']['comision_']['comision_siguiente_']);
      delete rowCloned['curso_']['comision_']['comision_siguiente_'];
    }
    if(('curso_' in rowCloned)
    && ('comision_' in rowCloned['curso_'])
    ){
      this.stg.setItem('comision' + rowCloned['curso_']['comision_'].id, rowCloned['curso_']['comision_']);
      delete rowCloned['curso_']['comision_'];
    }
    if(('curso_' in rowCloned)
    && ('carga_horaria_' in rowCloned['curso_'])
    && ('plan_' in rowCloned['curso_']['carga_horaria_'])
    ){
      this.stg.setItem('plan' + rowCloned['curso_']['carga_horaria_']['plan_'].id, rowCloned['curso_']['carga_horaria_']['plan_']);
      delete rowCloned['curso_']['carga_horaria_']['plan_'];
    }
    if(('curso_' in rowCloned)
    && ('carga_horaria_' in rowCloned['curso_'])
    && ('asignatura_' in rowCloned['curso_']['carga_horaria_'])
    ){
      this.stg.setItem('asignatura' + rowCloned['curso_']['carga_horaria_']['asignatura_'].id, rowCloned['curso_']['carga_horaria_']['asignatura_']);
      delete rowCloned['curso_']['carga_horaria_']['asignatura_'];
    }
    if(('curso_' in rowCloned)
    && ('carga_horaria_' in rowCloned['curso_'])
    ){
      this.stg.setItem('carga_horaria' + rowCloned['curso_']['carga_horaria_'].id, rowCloned['curso_']['carga_horaria_']);
      delete rowCloned['curso_']['carga_horaria_'];
    }
    if(('curso_' in rowCloned)
    ){
      this.stg.setItem('curso' + rowCloned['curso_'].id, rowCloned['curso_']);
      delete rowCloned['curso_'];
    }
    if(('dia_' in rowCloned)
    ){
      this.stg.setItem('dia' + rowCloned['dia_'].id, rowCloned['dia_']);
      delete rowCloned['dia_'];
    }
    this.stg.setItem("horario" + rowCloned.id, rowCloned);
  }

}
