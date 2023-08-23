import React from 'react';
import { Formik } from 'formik';
import { createNote } from '../../utils/extraFetchFunctions';

const CreateFormikForm = ({user_id, onRefresh, refreshValue}) => (

  <div>

    <h1>Create new note!</h1>

    <Formik

      initialValues={{ title: '', content: '' }}

      validate={values => {

        const errors = {};

        if (!values.title) {

          errors.title = 'Required';

        } 

        return errors;

      }}

      onSubmit={(values, { setSubmitting, resetForm }) => {

        setTimeout(() => {


          const body = {
            title: values.title,
            content: values.content,
            user_id: user_id
          }
          createNote(body,onRefresh, refreshValue);

          setSubmitting(false);

          resetForm();

        }, 400);

      }}

    >

      {({

        values,

        errors,

        touched,

        handleChange,

        handleBlur,

        handleSubmit,

        isSubmitting,

        /* and other goodies */

      }) => (

        <form onSubmit={handleSubmit}>

          <input

            type="text"

            name="title"

            placeholder="title"

            onChange={handleChange}

            onBlur={handleBlur}

            value={values.title}

          />

          {errors.title && touched.title&& errors.title}

          <input

            type="text"

            name="content"

            placeholder="content"

            onChange={handleChange}

            onBlur={handleBlur}

            value={values.content}

          />

          {errors.content && touched.content && errors.content}

          <button type="submit" disabled={isSubmitting}>

            Create

          </button>

        </form>

      )}

    </Formik>

  </div>

);



export default CreateFormikForm;