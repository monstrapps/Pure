export const styles = theme => ({
  drawerPaper: {
    width: theme.constants.drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
})