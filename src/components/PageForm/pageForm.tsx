import React, { FC, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import { Field, Form, Formik } from 'formik';

import './pageForm.css';
import { Button, ButtonBase, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { IFormColors, IFormValues } from '../interfaces/IStyleConfig';


interface IPageFormProps {
  onChange: (styleConfig: IFormValues) => void
}

const PageForm: React.FC<IPageFormProps> = ({onChange}) => {

  const [styleConfig, setStyleConfig] = useState<IFormValues>({
    colors: {
      primary: '',
      secondary: '',
      accent: '',
      text: '',
      background: '',
    },

    logoUrl: '',
    topBackgroundUrl: ''
  });

  useEffect( () => {

  },[])


  const initialValues: IFormValues = styleConfig;


  return (
    <Container id="form-client" maxWidth="xl">


      <h1>Grid esquerda</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setStyleConfig(values);
          console.log({ styleConfig, actions });
          alert(JSON.stringify(styleConfig, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className="form" >

          <Grid spacing={2} container xs={12} style={{ backgroundColor: '#1ac' }} className="form-colors">

            <Grid item xs={12}>

              <TextField
                fullWidth
                variant="outlined"
                label="Primary:"
                id="colors"
                name="colors"
              />
            </Grid>
            <Grid item xs={12}>

              <TextField
                fullWidth
                variant="outlined"
                label="Secondary:"
                id="colors"
                name="colors"
              />
            </Grid>
            <Grid item xs={12}>

              <TextField
                fullWidth
                variant="outlined"
                label="Accent:"
                id="colors"
                name="colors"
              />
            </Grid>
            <Grid item xs={12}>

              <TextField
                fullWidth
                variant="outlined"
                label="Text:"
                id="colors"
                name="colors"
              />
            </Grid>
            <Grid item xs={12}>

              <TextField
                fullWidth
                variant="outlined"
                label="Background:"
                id="colors"
                name="colors"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Logo:"
                type="file"
                id="logoUrl"
                name="logoUrl"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Imagem Topo:"
                type="file"
                id="topBackgroundUrl"
                name="topBackgroundUrl"
              />
            </Grid>
          </Grid>

          <Button type="submit" color="primary" variant="outlined">Submit</Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default PageForm;