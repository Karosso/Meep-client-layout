import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Form from '../../components/PageForm/pageForm';


import './client-profile.css';
import { Button, ButtonBase, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';

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
      

       <Form/>
      </Grid>

      <Grid item xs={6}>
        <h1>Grid Direita</h1>
        <Paper className="">
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className="">
                <img className="" alt="complex" src="/static/images/grid/complex.jpg" />
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
      </Grid>

      {/* <FormControl className={`formControl ${color}`}>
        <InputLabel id="select-color">Cor</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          onChange={handleChange}
        >
          <MenuItem value={"red"}>Vermelho</MenuItem>
          <MenuItem value={"green"}>Verde</MenuItem>
          <MenuItem value={"blue"}>Azul</MenuItem>
        </Select>
      </FormControl> */}




    </Container>
  );
}

export default ClientProfile;