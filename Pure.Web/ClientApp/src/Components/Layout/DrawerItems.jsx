import React from 'react';
import {
  Divider,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  withStyles,
  withTheme,
} from '@material-ui/core';
import {
  Report as ReportIcon,
  Delete as DeleteIcon,
  Mail as MailIcon,
  Send as SendIcon,
  Drafts as DraftsIcon,
  Star as StarIcon,
  MoveToInbox as InboxIcon,
} from '@material-ui/icons';
import { compose } from 'recompose';
import { styles } from './DrawerItems.styles'

class DrawerItems extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    )
  }
}

const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);

const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);

export default compose(
  withStyles(styles),
  withTheme(),
)(DrawerItems);
