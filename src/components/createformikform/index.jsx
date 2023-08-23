import React from 'react';
import { Formik } from 'formik';
import { createNote } from '../../utils/extraFetchFunctions';
import { StyledHeader1 } from '../styledheader';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { StyledButton } from '../styledbutton';

const StyledLabel = styled.label`
color: #333333;
font-family: Arial;
font-size: 1.2 rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
margin-top: 1.375rem;
margin-bottom: 1.375rem;
margin-right: 1.375rem;
`;

const StyledContainerInput = styled.div`
display: flex;
margin-bottom: 1.375rem;
margin-right: auto;
margin-left:auto;
width: 400px;
justify-content: space-around;
`



const CreateFormikForm = ({user_id, onRefresh, refreshValue}) => (

  <div>

    <StyledHeader1>Create note</StyledHeader1>

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

          < StyledContainerInput>

          <StyledLabel htmlFor="title">Title</StyledLabel>

          <input

            type="text"

            name="title"

            placeholder="Title"

            onChange={handleChange}

            onBlur={handleBlur}

            value={values.title}

          />

          </ StyledContainerInput>

          {errors.title && touched.title&& errors.title}

          < StyledContainerInput>

          <StyledLabel htmlFor="content">Content</StyledLabel>


          <input

            type="text"

            name="content"

            placeholder="Content"

            onChange={handleChange}

            onBlur={handleBlur}

            value={values.content}

          />
          </ StyledContainerInput>

          {errors.content && touched.content && errors.content}

          <StyledButton type="submit" disabled={isSubmitting}>

            Create

          </StyledButton>

        </form>

      )}

    </Formik>

  </div>

);



export default CreateFormikForm;