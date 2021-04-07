import React, { memo, useCallback, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { TaskFormActionsType, TaskFormValuesType } from './TaskForm.types';
import { TodoContext } from '../../Todo.context';
import { TaskFormSchema } from './TaskForm.schema';
import styles from './TaskForm.module.css';

const TaskForm = memo(function TaskForm() {
  const { onAdd } = useContext(TodoContext);

  const handleOnSubmit = useCallback(
    ({ name }: TaskFormValuesType, { resetForm }: TaskFormActionsType) => {
      onAdd(name);
      resetForm();
    },
    [onAdd]
  );

  return (
    <Formik<TaskFormValuesType>
      initialValues={{ name: '' }}
      validationSchema={TaskFormSchema}
      onSubmit={handleOnSubmit}
    >
      {() => (
        <Form>
          <Field
            name="name"
            placeholder="Add task..."
            autoComplete="off"
            className={styles.input}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </Form>
      )}
    </Formik>
  );
});

export default TaskForm;
