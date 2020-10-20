import React, { FC, useEffect, useState } from 'react';

import { Form, Formik } from 'formik';

import './pageForm.css';
import { Button, ButtonBase, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { IFormColors, IFormValues } from '../interfaces/IStyleConfig';


interface IPageFormProps {
  handleStyleConfig: (data: IFormValues) => void
}


const PageForm: React.FC<IPageFormProps> = ({handleStyleConfig}) => {

  interface IStyleData {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
    logoUrl: string,
    topBackgroundUrl: string
  }

  const styleData: IStyleData = {
    primary: '',
    secondary: '',
    accent: '',
    text: '',
    background: '',
    logoUrl: '',
    topBackgroundUrl: '',  
  };

  const [styleConfig, setStyleConfig] = useState<IStyleData>(styleData);

  const handleSubmit = (event: any) => {

    const colors: IFormColors = {
      primary: event.colorsPrimary,
      secondary: event.colorsSecondary,
      accent: event.colorsAccent,
      text: event.colorsText,
      background: event.colorsBackground
    };
    
    const card: IFormValues  = {
      colors: colors,
      logoUrl: event.logoUrl,
      topBackgroundUrl: event.topBackgroundUrl
    };

    handleStyleConfig(card);    
    // console.log('handlesubmit');

  }

  const handleChange = (event: React.ChangeEvent<any>) => {
    console.log('handlechange') ;
    console.log(event) ;

  }


  return (
    <Container id="form-client" maxWidth="xl">


      <h1>Grid esquerda</h1>

      <Formik
        initialValues={styleConfig}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({values, handleSubmit}) => <Form onSubmit={handleSubmit} className="form" >

          <Grid spacing={2} container className="form-colors">

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Primary:"
                id="primary"
                name="primary"
                onChange={(e) => {
                  console.log(e.target.value)
                  setStyleConfig(prevState => {
                    return {
                      ...prevState,
                      primary: e.target.value
                    }
                  })
                }}
                value={values.primary}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Secondary:"
                id="secondary"
                name="secondary"
                onChange={(e) => {
                  console.log(e.target.value)
                  setStyleConfig(prevState => {
                    return {
                      ...prevState,
                      secondary: e.target.value
                    }
                  })
                }}
                value={values.secondary}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Accent:"
                id="accent"
                name="accent"
                onChange={(e) => {
                  console.log(e.target.value)
                  setStyleConfig(prevState => {
                    return {
                      ...prevState,
                      accent: e.target.value
                    }
                  })
                }}
                value={values.accent}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Text:"
                id="text"
                name="text"
                onChange={(e) => {
                  console.log(e.target.value)
                  setStyleConfig(prevState => {
                    return {
                      ...prevState,
                      text: e.target.value
                    }
                  })
                }}
                value={values.text}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Background:"
                id="background"
                name="background"
                onChange={(e) => {
                  console.log(e.target.value)
                  setStyleConfig(prevState => {
                    return {
                      ...prevState,
                      background: e.target.value
                    }
                  })
                }}
                value={values.background}
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
                onChange={(e) => {
                  console.log(btoa(e.target.value))
                  setStyleConfig(prevState => {
                    return {
                      ...prevState,
                      logoUrl: btoa(e.target.value)
                    }
                  })
                }}
                // value={values.logoUrl}
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
                onChange={(e) => {
                  console.log(btoa(e.target.value))
                  setStyleConfig(prevState => {
                    return {
                      ...prevState,
                      topBackgroundUrl: btoa(e.target.value)
                    }
                  })
                }}
                // value={values.topBackgroundUrl}
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