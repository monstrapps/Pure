const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    backgroundColor: theme.palette.background.default,
  },
  content: {
    flexGrow: 1,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
      marginTop: 48, 
    }, 
    [theme.breakpoints.up('xs')]: { 
      marginTop: 48, 
    }, 
  },
});

export default styles;