import React from 'react'
import moment from 'moment'
import {PropsTextField} from '../../typescript/Action/props_interface'
import { ShowInstruction } from '../../services/ActionParamsValidator'

import DynamicFormStyles from './Styles'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

const Display = ({field, passedValue, updateField, invalidities}: PropsTextField) => {
  const classes = useStyles();
  const {key, label, validate} = field

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    let output = moment(event.target.value, "YYYY-MM-DD").format('YYYYMMDD')
    updateField(key, output);
  }
  
  let instruction = (): string => ShowInstruction(validate, invalidities)


  return (
    <div>
      <TextField
        id={key}
        label={label}
        type="date"
        value={moment(passedValue, "YYYYMMDD").format('YYYY-MM-DD') || ''}
        className={classes.textField}
        onChange={handleChange()}
      />
      <span style={{color: "red"}}>{instruction()}</span>
    </div>
  )
}

export default withStyles(DynamicFormStyles)(Display)