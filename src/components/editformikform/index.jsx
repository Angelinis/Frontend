import React from 'react';
import { Formik } from 'formik';
import { editNote } from '../../utils/extraFetchFunctions';
import { StyledHeader1 } from '../styledheader';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StyledButton } from '../styledbutton';

const HighlightedError = styled.span`
  color: #FF69B4;
  margin-top: 0.25rem; 
  font-size: 0.8rem;
`;

const StyledDiv = styled.div`
display: flex;
margin-right: auto;
margin-left:auto;
width: 400px;
justify-content: center;
`


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
margin-top: 1.375rem;
margin-right: auto;
margin-left:auto;
width: 400px;
justify-content: space-around;
`
const StyledContainerForm = styled.div`
background-color: #efefed;
width: 500px;
margin-top: 1.20rem;
margin-left:auto;
margin-right:auto;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
border-radius: 5px;
`

const EditFormikForm = ({note_id, onRefresh, refreshValue, handleOpen, open}) => (

  <StyledContainerForm >

    <StyledHeader1>Edit note</StyledHeader1>

    <Formik

      initialValues={{ title: '', content: '' }}

      validate={values => {

        const errors = {};

        if (!values.title) {

          errors.title = 'New title is mandatory';

        } 

        if (!values.content) {

          errors.content = 'New content is mandatory';

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

          handleOpen(!open);

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

        <div>
        < StyledContainerInput>

          <StyledLabel htmlFor="title">Title</StyledLabel>

          <input

            type="text"

            name="title"

            placeholder="New title"

            onChange={handleChange}

            onBlur={handleBlur}

            value={values.title}

          />

        </ StyledContainerInput>

        <StyledDiv>

        <HighlightedError>

          {errors.title && touched.title&& errors.title}

        </HighlightedError>
        </StyledDiv>


        </div>

        <div>
        < StyledContainerInput>

          <StyledLabel htmlFor="content">Content</StyledLabel>

          <input

            type="text"

            name="content"

            placeholder="New content"

            onChange={handleChange}

            onBlur={handleBlur}

            value={values.content}

          />

        </StyledContainerInput>

        <StyledDiv>

        <HighlightedError>

          {errors.content && touched.content && errors.content}
        </HighlightedError>

        </StyledDiv>

        </div>
        
        <StyledDiv>

          <StyledButton type="submit" disabled={isSubmitting}>

            Edit

          </StyledButton>

        </StyledDiv> 

        </form>

      )}

    </Formik>

  </StyledContainerForm >

);



export default EditFormikForm;