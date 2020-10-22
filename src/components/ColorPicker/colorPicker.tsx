import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


import { IFormColors, IFormValues } from '../../components/interfaces/IStyleConfig';
import { SketchPicker } from 'react-color';


interface IPageData {
  styleConfig: IFormValues;
}

const ColorPicker: React.FC<IPageData> = (props ) => {

  const [colorPicked, setColorPicked] = useState('#fff');

  const handleChangeComplete = (color: any, event: any) => {
    setColorPicked(color.hex);
  };

  return (
    <div className="div-container">

  
      <h1>ColorPicker Works!!!</h1>

      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button fullWidth variant="outlined" component="label" color="primary" {...bindTrigger(popupState)}
              style={{ backgroundColor: colorPicked }}
            >
              Cor de fundo
            </Button>

            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
            >
              <Box p={2}>
                <Typography>
                  <SketchPicker onChangeComplete={ handleChangeComplete } />
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