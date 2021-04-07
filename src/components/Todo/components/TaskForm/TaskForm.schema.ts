import * as Yup from 'yup';

import { TaskFormValuesType } from './TaskForm.types';

export const TaskFormSchema: Yup.SchemaOf<TaskFormValuesType> = Yup.object({
  name: Yup.string()
    .min(1, ({ min }) => `Name must be at least ${min} characters`)
    .max(32, ({ max }) => `Name shouldn't be more than ${max} characters`)
    .required('Please enter name'),
});
