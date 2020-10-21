import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';

import PageForm from '../../components/PageForm/pageForm';
import PagePreview from '../../components/PagePreview/pagePreview'
import { IFormValues } from '../../components/interfaces/IStyleConfig';

import './client-profile.css';

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
    setStyleConfig(data)
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