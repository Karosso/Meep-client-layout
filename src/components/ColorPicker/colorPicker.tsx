import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


import { IFormColors, IFormValues } from '../../components/interfaces/IStyleConfig';
import { SketchPicker } from 'react-color';


interface IColorPickerProps {
  handleStyleColorConfig: (name: string, color: string) => void;
  buttonName: string;
  handleStyleName: string;
  handleStyleColor: string;
}


const ColorPicker: React.FC<IColorPickerProps> = ( {handleStyleColorConfig, buttonName, handleStyleName, handleStyleColor } ) => {

  const [colorPicked, setColorPicked] = useState(handleStyleColor);

  const handleChange = (color: any, event: any) => {
    handleStyleColorConfig(handleStyleName, color.hex);
    setColorPicked(color.hex);
  };
 
  return (
    <div className="picker-container">

      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Grid spacing={1} container>
              
              <Grid item xs={12}>
                <Button size="large" fullWidth variant="outlined" component="label" color="primary" {...bindTrigger(popupState)}>
                  {buttonName}
                  <Button className="color-preview" variant="outlined" color="primary" 
                    style={{ 
                      backgroundColor: colorPicked,
                      marginLeft: '10px',
                      marginRight: '-10px',
                      width: '10px',
                      minWidth:' 0px',
                      height: '25px',
                    }}>
                  </Button>
                </Button>
              </Grid>
            </Grid>
            

            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box p={2}>
                <Typography>
                  <SketchPicker disableAlpha color={ colorPicked } onChange={ handleChange } />
                </Typography>
              </Box>
            </Popover>

          </div>
        )}
      </PopupState>

    </div>
      
  );
}

export default ColorPicker;