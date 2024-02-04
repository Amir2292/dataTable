import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

interface RightSideMenuProps {
  onItemClick: (option: string) => void;
}

const RightSideMenu: React.FC<RightSideMenuProps> = ({ onItemClick }) => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <List>
      {options.map((option, index) => (
        <React.Fragment key={option}>
          <ListItem button onClick={() => onItemClick(option)}>
            <ListItemText primary={option} />
          </ListItem>
          {index < options.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default RightSideMenu;
