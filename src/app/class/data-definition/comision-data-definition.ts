import { _ComisionDataDefinition } from './_comision-data-definition';
import { SedeDataDefinition } from './sede-data-definition';

export class ComisionDataDefinition extends _ComisionDataDefinition { 
    label (id: string | number): string {
        var comision = this.stg.getItem(this.entity + id);
        if(!comision) return null;
        var sede = this.stg.getItem("sede" + comision.sede);
        var ret = sede["numero"]+ comision["division"] + comision["anio"] + comision["semestre"];
        return ret.trim();
    }

}
