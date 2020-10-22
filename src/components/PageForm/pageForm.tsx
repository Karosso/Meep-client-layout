import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Container, Grid, Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { IFormColors, IFormValues } from '../interfaces/IStyleConfig';
import bannerMeepImg from '../../assets/meep-banner.png';
import logoMeepImg from '../../assets/meep.png';
import ColorPicker from '../ColorPicker/colorPicker';

import './pageForm.css';

interface IPageFormProps {
  handleStyleConfig: (data: IFormValues) => void
}

interface IStyleData {
  primary: string;
  secondary: string;
  accent: string;
  toolBar: string;
  toolBarText: string;
  text: string;
  background: string;
  logoUrl: string,
  topBackgroundUrl: string
}

const PageForm: React.FC<IPageFormProps> = ({ handleStyleConfig }) => {

  const styleData: IStyleData = {
    primary: '',
    secondary: '',
    accent: '',
    toolBar: '',
    toolBarText: '',
    text: '',
    background: '',
    logoUrl: logoMeepImg,
    topBackgroundUrl: bannerMeepImg,
  };

  const [styleConfig, setStyleConfig] = useState<IStyleData>(styleData);

  useEffect(() => {
    onChangePropsSender(styleConfig)
  }, [styleConfig]) 

  const handleSubmit = (event: any) => {

    const colors: IFormColors = {
      primary: event.primary,
      secondary: event.secondary,
      accent: event.accent,
      toolBar: event.toolBar,
      toolBarText: event.toolBarText,
      text: event.text,
      background: event.background
    };

    const card: IFormValues = {
      colors: colors,
      logoUrl: event.logoUrl,
      topBackgroundUrl: event.topBackgroundUrl
    };

    handleStyleConfig(card);

    console.log('Submit: ', card);
  }

  const onChangePropsSender = (inputStyleProp: IStyleData) => {

    const colors: IFormColors = {
      primary: inputStyleProp.primary,
      secondary: inputStyleProp.secondary,
      accent: inputStyleProp.accent,
      toolBar: inputStyleProp.toolBar,
      toolBarText: inputStyleProp.toolBarText,
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

  const toBase64 = (file: Blob) => new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]?.type.split("/")[0] === "image") {
      event.persist()

      const fileString = await toBase64(event.target.files[0])

      setStyleConfig(prevState =>  ({ 
        ...prevState, 
        ...{ [event.target.name]: fileString } 
      }))
    }
  }

  function handleStyleColorConfig (name: string, color: string) {
    setStyleConfig(prevState => ({ 
      ...prevState, 
      ...{ [name]: color } 
    }))
  }

  return (
    <Container id="form-client" maxWidth="xl">

      <h1>Atributos de Estilização</h1>

      <Formik
        initialValues={styleConfig}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => <Form onSubmit={handleSubmit} className="form" >

          <Grid spacing={2} container className="form-styles">

            <Grid item xs={12}>
              <ColorPicker 
                buttonName={'Cor Primária: '}
                handleStyleName={'primary'} 
                handleStyleColor={styleConfig.primary} 
                handleStyleColorConfig={handleStyleColorConfig}
              />
            </Grid>

            <Grid item xs={12}>
              <ColorPicker 
                buttonName={'Cor secundária: '}
                handleStyleName={'secondary'} 
                handleStyleColor={styleConfig.secondary} 
                handleStyleColorConfig={handleStyleColorConfig}
              />
            </Grid>

            <Grid item xs={12} style={{ display: "none" }}>
              <ColorPicker 
                buttonName={'Cor de destaque: '}
                handleStyleName={'accent'} 
                handleStyleColor={styleConfig.accent} 
                handleStyleColorConfig={handleStyleColorConfig}
              />
            </Grid>

            <Grid item xs={12} >
              <ColorPicker 
                buttonName={'Cor de texto: '}
                handleStyleName={'text'} 
                handleStyleColor={styleConfig.text} 
                handleStyleColorConfig={handleStyleColorConfig}
              />
            </Grid>

            <Grid item xs={12} >
              <ColorPicker 
                buttonName={'Cor do menu: '}
                handleStyleName={'toolBar'} 
                handleStyleColor={styleConfig.toolBar} 
                handleStyleColorConfig={handleStyleColorConfig}
              />
            </Grid>

            <Grid item xs={12} >
              <ColorPicker 
                buttonName={'Cor de texto do menu: '}
                handleStyleName={'toolBarText'} 
                handleStyleColor={styleConfig.toolBarText} 
                handleStyleColorConfig={handleStyleColorConfig}
              />
            </Grid>

            <Grid item xs={12} >
              <ColorPicker 
                buttonName={'Cor de fundo: '}
                handleStyleName={'background'} 
                handleStyleColor={styleConfig.background} 
                handleStyleColorConfig={handleStyleColorConfig}
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
              <Button fullWidth type="submit" color="primary" variant="outlined">Enviar</Button>
            </Grid>

          </Grid>
        </Form>}
      </Formik>
    </Container>
  );
}

export default PageForm;