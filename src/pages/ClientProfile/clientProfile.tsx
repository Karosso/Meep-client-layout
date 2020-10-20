import React, { useState } from 'react';

import { Button, ButtonBase, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';

import PageForm from '../../components/PageForm/pageForm';

import PagePreview from '../../components/PagePreview/pagePreview'

import './client-profile.css';
import { IFormColors, IFormValues } from '../../components/interfaces/IStyleConfig';

function ClientProfile() {

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

  function handleStyleConfig(data: IFormValues) {
    // console.log(data)
    setStyleConfig(data)
   
  }

  const [logoUrl, setLogoUrl] = useState('');
  const [topBackgroundUrl, settopBackgroundUrl] = useState('');

  const initialValues: IFormValues = styleConfig;

  function handleChange(event: React.ChangeEvent<{ value: unknown }>) {

    // setColor(String(event.target.value));
  }

  return (
    <Container id="page-client-profile" maxWidth="xl">

      <Grid item xs={6}>
       <PageForm handleStyleConfig={handleStyleConfig} />
      </Grid>

      <Grid item xs={6}>
        <PagePreview styleConfig={styleConfig}/>
      </Grid>



    </Container>
  );
}

export default ClientProfile;