import { DataDefinition } from 'src/app/core/class/data-definition';

export class _DistribucionHorariaDataDefinition extends DataDefinition {
  entity: string = 'distribucion_horaria';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('plan_' in rowCloned)
    ){
      this.stg.setItem('plan' + rowCloned['plan_'].id, rowCloned['plan_']);
      delete rowCloned['plan_'];
    }
    if(('asignatura_' in rowCloned)
    ){
      this.stg.setItem('asignatura' + rowCloned['asignatura_'].id, rowCloned['asignatura_']);
      delete rowCloned['asignatura_'];
    }
    this.stg.setItem("distribucion_horaria" + rowCloned.id, rowCloned);
  }

}
