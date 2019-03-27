import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//my components
import MainMenu from './menu'
export default function main(props) {
      return (
        <Grid container>
            <Grid item xs={12}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Hisp Colombia
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item xs={12}>
                <MainMenu/>
            </Grid>
        </Grid>
    )
}

