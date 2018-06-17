import React from 'react'
import { withStyles, withTheme, Grid } from '@material-ui/core'
import { compose } from 'recompose'
import { connect } from 'react-redux';

class Home extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16} className={classes.root}>
        <Grid item xs={6}>
          <div>content..</div>
        </Grid>
      </Grid>
    )
  }
}

const styles = () => ({
  root: {
    padding: 10,
    height: '100%',
  }
})

const mapStateToProps = (state) => {
  return {
    example: state.example
  }
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
  withTheme()
)(Home);