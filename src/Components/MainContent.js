import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function MainConcent(props) {
    const { styles } = props.theme;
    return (
        <>
            <Grid container spacing={24} style={styles.Content} >
                <Grid item xs={12}>
                    <AppBar position="static" style={styles.AppBar}>
                        <Toolbar>
                             <Typography variant="h6" color="inherit" style={styles.grow}>
                                HISP Colombia
                            </Typography>
                            <Button color="inherit">Servicios</Button>
                            <Button color="inherit">Proyectos</Button>
                            <Button color="inherit">Equipo</Button>
                            <Button color="inherit">Contactos</Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item xs={12} style={styles.ContentMain}>
                    <Typography variant="h1" color="inherit" style={styles.MainTitle}>
                        HISP Colombia
                    </Typography>
                    <Typography variant="h5" color="inherit" style={styles.secondTitle}>
                        Confia en nuestra experiencia
                    </Typography>
                    <Button variant="outlined" color="inherit" style={styles.MainButton}>Leer más</Button>
                </Grid>
                <Grid item xs={12} style={styles.backgroundLogo}>
                    
                </Grid>
            </Grid>
        </>
    )
}
export default withTheme()(MainConcent)

