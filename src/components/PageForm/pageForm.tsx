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

  const [styleConfig, setStyleConfig] = useState({

    colorsPrimary: '',
    colorsSecondary: '',
    colorsAccent: '',
    colorsText: '',
    colorsBackground: '',
    logoUrl: '',
    topBackgroundUrl: ''
  });

  const handleSubmit = (event: any) => {
    console.log(event);
  }

  useEffect( () => {
      const response = handleSubmit
  },[])



  // const initialValues: IFormValues = styleConfig;


  return (
    <Container id="form-client" maxWidth="xl">


      <h1>Grid esquerda</h1>

      <Formik
        initialValues={styleConfig}
        onSubmit={handleSubmit}
      >
        {({values, handleChange, handleSubmit}) => <Form onSubmit={handleSubmit} className="form" >

          <Grid spacing={2} container className="form-colors">

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Primary:"
                id="primary"
                name="colorsPrimary"
                onChange={handleChange}
                value={values.colorsPrimary}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Secondary:"
                id="secondary"
                name="colorsSecondary"
                onChange={handleChange}
                value={values.colorsSecondary}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Accent:"
                id="accent"
                name="colorsAccent"
                onChange={handleChange}
                value={values.colorsAccent}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Text:"
                id="text"
                name="colorsText"
                onChange={handleChange}
                value={values.colorsText}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Background:"
                id="background"
                name="colorsBackground"
                onChange={handleChange}
                value={values.colorsBackground}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Logo:"
                type="file"
                id="logoUrl"
                name="logoUrl"
                onChange={handleChange}
                value={values.logoUrl}
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
                onChange={handleChange}
                value={values.topBackgroundUrl}
              />
            </Grid>

            <Grid item xs={12}>
              <label htmlFor="topBackgroundUrl">
                <input
                  style={{ display: 'none' }}
                  id="topBackgroundUrl"
                  name="topBackgroundUrl"
                  type="file"
                  onChange={handleChange}
                  value={values.topBackgroundUrl}
                />

                <Button 
                  fullWidth
                  color="primary" 
                  variant="outlined" 
                  component="span"
                  
                >
                  Upload Imagem Topo
                </Button>
              </label>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" color="primary" variant="outlined">Submit</Button>
            </Grid>

          </Grid>
        </Form>}
      </Formik>
    </Container>
  );
}

export default PageForm;