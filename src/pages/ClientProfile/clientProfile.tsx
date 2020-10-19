import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Button, ButtonBase, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';


import PageForm from '../../components/PageForm/pageForm';


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
      

       <PageForm/>
      </Grid>

      <Grid item xs={6}>
        <h1>Grid Direita</h1>
        <PagePreview/>
      </Grid>



    </Container>
  );
}

export default ClientProfile;