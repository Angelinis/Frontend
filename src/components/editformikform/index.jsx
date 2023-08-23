import React from 'react';
import { Formik } from 'formik';
import { editNote } from '../../utils/extraFetchFunctions';
import { StyledHeader1 } from '../styledheader';



const EditFormikForm = ({note_id, onRefresh, refreshValue}) => (

  <div>

    <StyledHeader1>Edit note</StyledHeader1>

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
            content: values.content
          }
          editNote(body,onRefresh, note_id, refreshValue);

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

          <label htmlFor="title">Title</label>

          <input

            type="text"

            name="title"

            placeholder="title"

            onChange={handleChange}

            onBlur={handleBlur}

            value={values.title}

          />

          {errors.title && touched.title&& errors.title}

          <label htmlFor="content">Content</label>

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

            Edit

          </button>

        </form>

      )}

    </Formik>

  </div>

);



export default EditFormikForm;