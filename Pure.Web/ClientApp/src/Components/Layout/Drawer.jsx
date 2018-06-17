import React from 'react';
import { compose } from 'redux';
import { Hidden, Drawer, withStyles, withTheme } from '@material-ui/core';
import DrawerItems from './DrawerItems';
import { styles } from './Drawer.styles';

class MDrawer extends React.PureComponent {
  render() {
    const { classes, mobileOpen, handleDrawerToggle } = this.props;
    return (
      <React.Fragment>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerItems />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <DrawerItems />
          </Drawer>
        </Hidden>
      </React.Fragment>
    )
  }
}

export default compose(
  withStyles(styles),
  withTheme(),
)(MDrawer)