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
      primary: event.primary,
      secondary: event.secondary,
      accent: event.accent,
      text: event.text,
      background: event.background
    };
    
    const card: IFormValues  = {
      colors: colors,
      logoUrl: event.logoUrl,
      topBackgroundUrl: event.topBackgroundUrl
    };

    handleStyleConfig(card);    
    console.log('handlesubmit', colors);

  }

  return (
    <Container id="form-client" maxWidth="xl">

      <h1>Atributos de Estilização</h1>

      <Formik
        initialValues={styleConfig}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({values, handleSubmit}) => <Form onSubmit={handleSubmit} className="form" >

          <Grid spacing={2} container className="form-styles">

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Cor primária:"
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
                label="Cor secundária:"
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
                label="Cor de destaque:"
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
                label="Cor de texto:"
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
                color="primary"
                fullWidth
                variant="outlined"
                label="Cor de fundo:"
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

            <Grid className="grid-upload" item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                component="label"
                color="primary"
              >
                Escolher Logo
                <TextField
                  id="logoUrl"
                  name="logoUrl"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    console.log(btoa(e.target.value))
                    setStyleConfig(prevState => {
                      return {
                        ...prevState,
                        logoUrl: btoa(e.target.value)
                      }
                    })
                  }}
                />
              </Button>
            </Grid>

            <Grid className="grid-upload" item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                component="label"
                color="primary"
              >
                Escolher Imagem Topo
                <TextField
                  id="topBackgroundUrl"
                  name="topBackgroundUrl"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    console.log(btoa(e.target.value))
                    setStyleConfig(prevState => {
                      return {
                        ...prevState,
                        topBackgroundUrl: btoa(e.target.value)
                      }
                    })
                  }}
                />
              </Button>
            </Grid>
            

            <Grid className="grid-upload" item xs={12}>
              <Button fullWidth type="submit" color="primary" variant="outlined">Submit</Button>
            </Grid>

          </Grid>
        </Form>}
      </Formik>
    </Container>
  );
}

export default PageForm;