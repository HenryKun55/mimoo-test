import React, { useState } from 'react'
import { AppBar, Typography, Box } from '@material-ui/core'

import { useStyles, Tabs, Tab, Container } from './styles'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  )
}

export default function SimpleTabs({ ...props }) {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container className={classes.root} {...props}>
      <AppBar className={classes.appBar} position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Skin Care"/>
          <Tab label="Snacks" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        Listando dados de skin care
      </TabPanel>

      <TabPanel value={value} index={1}>
        Meus snacks
      </TabPanel>
    </Container>
  )
}