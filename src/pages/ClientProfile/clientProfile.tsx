import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Button, ButtonBase, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';

import PagePreview from '../../components/PagePreview/pagePreview'

import './client-profile.css';

interface MyFormValues {
  colors: IformColors;
  logoUrl: string;
  topBackgroundUrl: string;
}

interface IformColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

function ClientProfile() {

  const [colors, setColor] = useState<IformColors>({
    primary: '',
    secondary: '',
    accent: '',
    text: '',
    background: '',
  });


  const [logoUrl, setLogoUrl] = useState('');
  const [topBackgroundUrl, settopBackgroundUrl] = useState('');

  const initialValues: MyFormValues = { colors, logoUrl, topBackgroundUrl };

  function handleChange(event: React.ChangeEvent<{ value: unknown }>) {

    // setColor(String(event.target.value));
  }

  return (
    <Container id="page-client-profile" maxWidth="xl">

      <Grid xs={6}>
        <h1>Grid esquerda</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <Form className="form" >

            <Grid spacing={2} container xs={12} style={{backgroundColor: '#1ac' }} className="form-colors">

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
      </Grid>

      <Grid item xs={6}>
        <h1>Grid Direita</h1>
        <PagePreview/>
      </Grid>



    </Container>
  );
}

export default ClientProfile;