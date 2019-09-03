import {FieldConfig} from '../../classes/field.interface';

export abstract class FormControlBaseComponentBase {
  protected constructor() {
  }

  abstract save(): FieldConfig;

}
