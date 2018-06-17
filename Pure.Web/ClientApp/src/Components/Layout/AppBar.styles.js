export const styles = theme => ({
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: { 
    minHeight: 48, 
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
      minHeight: 48, 
    }, 
    [theme.breakpoints.up('sm')]: { 
      minHeight: 48, 
    }, 
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
})