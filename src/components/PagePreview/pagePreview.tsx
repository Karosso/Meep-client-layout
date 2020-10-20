import React, { useEffect, useState } from 'react';

import './pagePreview.css';
import { Button, ButtonBase, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';

import { IFormColors, IFormValues } from '../../components/interfaces/IStyleConfig';

import Logo from '../../assets/lua.jpg'
import  BackgroundImg from '../../assets/iStock-536613027.jpg'

interface IPageData {
  styleConfig: IFormValues;
 
}

const PagePreview: React.FC<IPageData> = (props ) => {
  
  const { colors, logoUrl, topBackgroundUrl} = props.styleConfig;



  useEffect(() => {
    console.log("page Preview: ", props.styleConfig);
  }, [props.styleConfig]);

  return (
  <Grid className="preview" container sm={12}>

    <Grid item className="backgorund-img">
    <img className="logo-img" alt="[]" src={Logo}/>
      
    <Grid item className="logo-img">
      <img className="img" alt="[]" src={BackgroundImg}/>
    </Grid>    
    </Grid>  
        <Paper className="">
          <Grid container spacing={2}>
           
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs className="card">

                  <img className="card-img" alt="[]" src={Logo}/>
                  <Grid item className="text-card">
                  <Typography gutterBottom variant="subtitle1">
                    Filé com Fritas
                    </Typography>
                  <Typography variant="body2" gutterBottom>
                  300g de Filé - 400g de Batata Frita
                    </Typography>    
                  </Grid>
                    
                </Grid>              
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">R$50.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

   
  </Grid>
  );
}

export default PagePreview;