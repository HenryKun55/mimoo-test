import styled from 'styled-components'
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import { Tabs as TabsMUI, Tab as TabMUI } from '@material-ui/core'
import { colors } from '../../styles';

export const Tabs = withStyles({
  indicator: {
    backgroundColor: colors.primary,
    color: colors.primary,
    height: 4,
  },
})(TabsMUI);

export const Tab = withStyles({
  root: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: colors.greyLight,
  },
  selected: {
    color: colors.primary,
    fontWeight: 'bold',
  },
})(TabMUI);

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  appBar: {
    background: 'none',
    border: 0,
    boxShadow: 'none',
  },
}));

export const Container = styled.div``
