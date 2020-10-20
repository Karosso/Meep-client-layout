import React, { FC, useEffect, useState } from 'react';

import { Form, Formik } from 'formik';

import './pageForm.css';
import { Button, ButtonBase, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { IFormColors, IFormValues } from '../interfaces/IStyleConfig';


interface IPageFormProps {
  handleStyleConfig: (data: IFormValues) => void
}

const toBase64 = (file: Blob) => new Promise<string | ArrayBuffer | null>((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  // console.log(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

const PageForm: React.FC<IPageFormProps> = ({ handleStyleConfig }) => {

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

    const card: IFormValues = {
      colors: colors,
      logoUrl: event.logoUrl,
      topBackgroundUrl: event.topBackgroundUrl
    };

    handleStyleConfig(card);
    console.log('handlesubmit', colors);

  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStyleConfig(prev => ({ ...prev, ...{ [event.target.name]: event.target.value } }))
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      event.persist()
      const fileString = await toBase64(event.target.files[0])
      setStyleConfig(prev => ({ ...prev, ...{ [event.target?.name]: fileString } }))
    }
  }

  return (
    <Container id="form-client" maxWidth="xl">

      <h1>Atributos de Estilização</h1>

      <Formik
        initialValues={styleConfig}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit }) => <Form onSubmit={handleSubmit} className="form" >

          <Grid spacing={2} container className="form-styles">

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Cor primária:"
                id="primary"
                name="primary"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                <input
                  id="logoUrl"
                  name="logoUrl"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  /* value={values.logoUrl} */
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
                <input
                  id="topBackgroundUrl"
                  name="topBackgroundUrl"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  /* value={values.topBackgroundUrl} */
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