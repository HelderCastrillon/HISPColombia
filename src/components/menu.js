import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

//mycomponent
import Start from './start'
function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };

class MainMenu extends React.Component{

  
 constructor(props){
        super(props);
        this.state = {
            tabActive:0
        };
 }
handleChange(event, value){
    console.log(value)
    this.setState({ tabActive:value});
  };

  handleChangeIndex(index){
    this.setState({ value: index });
  };

  
render(){
    return(
        <div>

<AppBar position="static" color="default">
                    <Tabs
                        value={this.state.tabActive}
                        onChange={this.handleChange.bind(this)}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Inicio" />
                        <Tab label="Nuestros Clientes" />
                        <Tab label="Nuestros productos" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={'x-reverse'}
                    index={this.state.tabActive}
                    onChangeIndex={this.handleChangeIndex.bind(this)}
                >
                    <TabContainer dir={'rtl'}>Inicio</TabContainer>
                    <TabContainer dir={'rtl'}><Start/></TabContainer>
                    <TabContainer dir={'rtl'}>Nuestros productos</TabContainer>
                </SwipeableViews>
        </div>   
    )
}
}
export default MainMenu;