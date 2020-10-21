import React, { useEffect, useState } from 'react';

import './pagePreview.css';
import { Button, ButtonBase, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';

import { IFormColors, IFormValues } from '../../components/interfaces/IStyleConfig';

import logo from '../../assets/lua.jpg'

interface IPageData {
  styleConfig: IFormValues;
 
}

const PagePreview: React.FC<IPageData> = (props ) => {
  
  const { colors, logoUrl, topBackgroundUrl} = props.styleConfig;



  useEffect(() => {
    console.log("page Preview: ", props.styleConfig);
  }, [props.styleConfig]);

  return (
    
    <Grid container xl className="container">    

      <Grid className="preview-top" item sm={12}>

      <Grid item className="text-top">
      <h1>Preview Layout</h1>
      </Grid>    
        <Grid item  className="div-top">
          
            <Grid item className="background-top">
              <img className="background-top-img" alt="[Imagem do banner]" src={props.styleConfig.topBackgroundUrl}/>
              <Grid item className="logo">
                <img className="logo-img" alt="[Imagem da logo]" src={props.styleConfig.logoUrl}/>
              </Grid>    
            </Grid> 
        </Grid> 
          <Paper className="preview-card">
            <Grid container spacing={2} >           
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs className="card">
                    <img className="card-img" alt="[]" src={props.styleConfig.logoUrl}/>
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
        <Grid item className="footer">
            <h2>Ver carrinho</h2>
        </Grid>
      </Grid>
    
      
  );
}

export default PagePreview;