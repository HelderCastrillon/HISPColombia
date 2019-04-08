
import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import Logo from './Images/Logo.png'
const theme = createMuiTheme({
    typography: { useNextVariants: true },
    palette: {
      primary: { main: blue[700] }, // Purple and green play nicely together.
      secondary: { main: red[500] }, // This is just green.A700 as hex.
    },    
    styles:{        
        MainTitle:{

            color: 'white',
            backgroundImage: 'none',
            backgroundColor: 'transparent'
        },
        secondTitle:{

            color: 'white',
            paddingBottom:50
        },
        MainButton:{
            color: 'white'
        },
        backgroundLogo:{
            backgroundImage:{Logo},
            height:800
        },
        ContentMain:{
            padding: '0 300px',
            paddingTop:300
        },
        Content:{
            background: 'linear-gradient(45deg, #455A64 30%, #607D8B 90%)',
            height:900
        },
        AppBar:{
            background: 'rgba(0,0,0,.0)',
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 300px',
            boxShadow: '0 3px 5px 2px rgba(0,0,0,.0)',
        },
        forms: {
            minWidth: 350,
            maxWidth: 750,
        },
        formInput: {
            fontWeight: 100,
        },
        grow: {
            flexGrow: 1,
        },
    }
  });
 
  export default theme;
  