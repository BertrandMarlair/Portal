import React from 'react';
import { ShowInstruction } from '../../services/ActionParamsValidator'

import DynamicFormStyles from './Styles'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {PropsTextField} from '../../typescript/Action/props_interface'

const Display = ({field, passedValue, updateField, classes, invalidities}: PropsTextField) => {
  const {key, label, validate}: any = field
  
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    updateField(key, event.target.value);
  }

  let instruction = (): string => ShowInstruction(validate, invalidities)

  return (
    <div>
      <TextField
        id="outlined-name"
        key={key}
        label={label}
        className={classes.textField}
        value={passedValue || ''}
        onChange={handleChange()}
        required={!!validate.required}
      />
      <span style={{color: "red"}}>{instruction()}</span>
    </div>
  )
}

export default  withStyles(DynamicFormStyles)(Display)
