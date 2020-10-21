import React, { FC, useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Container, Grid, TextField, Input } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { SketchPicker } from 'react-color';
import { IFormColors, IFormValues } from '../interfaces/IStyleConfig';

import './pageForm.css';


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

  const [pickerColor, setPickerColor] = useState('');

  const handleChangeComplete = (color: any) => {
    setPickerColor(color.hex);
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      typography: {
        padding: theme.spacing(2),
      },
    }),
  );

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const [styleConfig, setStyleConfig] = useState<IStyleData>(styleData);

  useEffect(() => {
    onChangePropsSender(styleConfig)
  }, [styleConfig]) 

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

  }

  const onChangePropsSender = (inputStyleProp: IStyleData) => {

    const colors: IFormColors = {
      primary: inputStyleProp.primary,
      secondary: inputStyleProp.secondary,
      accent: inputStyleProp.accent,
      text: inputStyleProp.text,
      background: inputStyleProp.background
    };

    const card: IFormValues = {
      colors: colors,
      logoUrl: inputStyleProp.logoUrl,
      topBackgroundUrl: inputStyleProp.topBackgroundUrl
    };

    handleStyleConfig(card);

  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStyleConfig(prevState => ({ 
      ...prevState, 
      ...{ [event.target.name]: event.target.value } 
    }))
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0].type.split("/")[0] === "image") {
      event.persist()
      const fileString = await toBase64(event.target.files[0])

      setStyleConfig(prevState =>  ({ 
        ...prevState, 
        ...{ [event.target.name]: fileString } 
      }))
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

              
            
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography className={classes.typography}>
                <SketchPicker 
                  color={ pickerColor }
                  onChangeComplete={ handleChangeComplete }
                />
              </Typography>
            </Popover>

            <Grid item xs={12} className="colorPicker" style={{display: "none"}}>

              <Grid item xs={10} spacing={1}>
                <Button
                  aria-describedby={id}
                  fullWidth
                  variant="outlined"
                  component="label"
                  color="primary"
                  onClick={ () => handleClick }
                >
                  Cor de texto
                </Button>
              </Grid>

              <Grid item xs={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  component="label"
                  style={{backgroundColor: pickerColor, alignSelf: "flex-end"}}
                >
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Cor primária:"
                id="primary"
                name="primary"
                onChange={handleColorChange}
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
                onChange={handleColorChange}
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
                onChange={handleColorChange}
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
                onChange={handleColorChange}
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
                onChange={handleColorChange}
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
                <Input
                  id="logoUrl"
                  name="logoUrl"
                  type="file"
                  inputProps={{ accept: 'image/*' }}
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
                <Input
                  id="topBackgroundUrl"
                  name="topBackgroundUrl"
                  type="file"
                  inputProps={{ accept: 'image/*' }}
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