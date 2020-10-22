import React, { useEffect, useState } from 'react';

import './pagePreview.css';
import { Grid, Paper, Typography, Tabs, Tab } from '@material-ui/core';

import { IFormColors, IFormValues } from '../../components/interfaces/IStyleConfig';



interface IPageData {
  styleConfig: IFormValues;
 
}

const PagePreview: React.FC<IPageData> = (props ) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  
  const { colors, logoUrl, topBackgroundUrl} = props.styleConfig;



  useEffect(() => {
    console.log("page Preview: ", props.styleConfig);
  }, [props.styleConfig]);

  return (
    <div className="div-container">

  
      <h1>Preview Layout</h1>
    <Grid container xl className="container"  style={{ backgroundColor: props.styleConfig.colors.background}}>

      <Grid className="preview-top" item sm={12} >
         
            <Grid item  className="div-top">          
                
                <Grid item className="background-top">
                    <img className="background-top-img" alt="[Imagem do banner]" src={props.styleConfig.topBackgroundUrl}/>

                      <Grid item className="logo">                   
                          <img className="logo-img" alt="[Imagem da logo]" src={props.styleConfig.logoUrl}/>
                      </Grid>    
                </Grid> 
              
            </Grid>
            <Grid item xs={12} >
              <Paper >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="inherit"
                  centered
                  style={{ backgroundColor: props.styleConfig.colors.toolBar, color:props.styleConfig.colors.toolBarText }}
                >
                  <Tab label="Comidas" />
                  <Tab label="Bebidas" />
                
                </Tabs>
              </Paper>
            </Grid>
            <Paper className="preview-card">
              <Grid container spacing={2} >           
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs className="card">
                      <img className="card-img" alt="[]" src={props.styleConfig.logoUrl}/>
                      <Grid item className="text-card">
                      <Typography gutterBottom className="text" variant="subtitle1" style={{ color: props.styleConfig.colors.text}}>
                        Filé com Fritas
                        </Typography>
                      <Typography variant="body2" className="text" gutterBottom  style={{ color: props.styleConfig.colors.text}}>
                        300g de Filé - 400g de Batata Frita
                      </Typography>    
                      </Grid>                    
                    </Grid>              
                  </Grid>
                      <Grid item>
                        <Typography variant="subtitle2"   style={{ color: props.styleConfig.colors.text}} >R$50.00</Typography>
                      </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item className="footer"   style={{ backgroundColor: props.styleConfig.colors.primary}}>
              <h2>Ver carrinho</h2>
          </Grid>
      </Grid>
    </div>
      
  );
}

export default PagePreview;