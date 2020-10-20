import React, { useState } from 'react';

import './pagePreview.css';
import { Button, ButtonBase, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';

import { IFormColors, IFormValues } from '../../components/interfaces/IStyleConfig';
import { url } from 'inspector';


interface IPageData {
  styleConfig: IFormValues;
 
}

const PagePreview: React.FC<IPageData> = (props ) => {
  
  const { colors, logoUrl, topBackgroundUrl}= props.styleConfig;


  return (
    <Container id="page-client-profile" maxWidth="xl">
        <h1>Grid Direita</h1>
        <Paper className="">
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className="">
                <img className="" alt="[]" src={logoUrl} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                    </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                    </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                    </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                    </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>


    </Container>
  );
}

export default PagePreview;