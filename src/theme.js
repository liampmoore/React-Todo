import React from 'react';

import {createMuiTheme} from '@material-ui/core/styles'
import deepOrange from '@material-ui/core/colors/deepOrange';
import amber from '@material-ui/core/colors/amber';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: {main: deepOrange[200]},
        secondary: {main: amber.A100},
        error: {main: red[200]},
        type: "dark"
    }
})

export default theme