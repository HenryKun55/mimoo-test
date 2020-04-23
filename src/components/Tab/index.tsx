import React, { useState } from 'react'
import { AppBar, Typography, Box } from '@material-ui/core'

import { useStyles, Tabs, Tab as CustomTab, Container } from './styles'

export interface Props {
  tabs: TabProps[];
  initialValue?: number;
  onChange?: (index: number) => void;
}

export interface TabProps {
  label: string;
  render: () => React.ReactNode;
}

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

const Tab: React.FC<Props> = ({ tabs = [], initialValue = 0, onChange, ...props }) => {
  const classes = useStyles()
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)

    if (onChange) onChange(newValue)
  }

  return (
    <Container className={classes.root} {...props}>
      <AppBar className={classes.appBar} position="relative">
        <Tabs value={value} onChange={handleChange} >
          {tabs.map((tab: TabProps, index) => <CustomTab key={index} label={tab.label} />)}
        </Tabs>
      </AppBar>

      {tabs.map((tab: TabProps, index: number) => (
        <TabPanel value={value} index={index} key={index}>
          {tab.render()}
        </TabPanel>
      ))}
    </Container>
  )
}

export default Tab
