import { FormikHelpers } from 'formik';

export interface TaskFormValuesType {
  name: string;
}

export interface TaskFormActionsType
  extends FormikHelpers<TaskFormValuesType> {}
