import React from 'react';
import { render } from 'react-dom';
import App from './App';

import {ThemeProvider} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from './theme';

render( <ThemeProvider theme={theme}><CssBaseline><App /></CssBaseline></ThemeProvider>, document.getElementById('root'));
