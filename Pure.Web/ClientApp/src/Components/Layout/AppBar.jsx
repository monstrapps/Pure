import React from 'react';
import { compose } from 'recompose';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
  withTheme,
} from '@material-ui/core'
import {
  Menu as MenuIcon
} from '@material-ui/icons';
import { styles } from './AppBar.styles';

class MAppBar extends React.PureComponent {
  render() {
    const { classes, handleDrawerToggle } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar classes={{ root: classes.toolbar }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            Pursuit
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default compose(withStyles(styles), withTheme())(MAppBar);
