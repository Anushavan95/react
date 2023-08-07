import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabsWrappedLabel({category, getCategoryItem}) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="tab_container">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
      
      {category && category?.map((item, index) => {
        return   <Tab value={index} label={item} onClick={() =>getCategoryItem(item)} />
      })}
      
      </Tabs>
    </Box>
  );
}
