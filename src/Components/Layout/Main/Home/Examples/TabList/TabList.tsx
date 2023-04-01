import * as React from 'react';
import Box from '@mui/joy/Box';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

export default function TabsVariants({index, setIndex}: {index : number, setIndex : (value: number) => void}) {
  // const [index, setIndex] = React.useState(0);
  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', marginBottom: "45px" }}>
      <Tabs
        aria-label="Outlined tabs"
        value={index}
        onChange={(event: any, value: any) => setIndex(value as number)}
        sx={{ borderRadius: 'lg' }}
      >
        <TabList variant="outlined">
          <Tab
            variant={index === 0 ? 'soft' : 'plain'}
            color={index === 0 ? 'info' : 'neutral'}
          >
            People
          </Tab>
          <Tab
            variant={index === 1 ? 'soft' : 'plain'}
            color={index === 1 ? 'primary' : 'neutral'}
          >
            Product
          </Tab>
          <Tab
            variant={index === 2 ? 'soft' : 'plain'}
            color={index === 2 ? 'warning' : 'neutral'}
          >
            Animal
          </Tab>
        </TabList>
      </Tabs>

     
    </Box>
  );
}