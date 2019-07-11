import React from 'react'
import { ShowInstruction } from '../../services/ActionParamsValidator'

import DynamicFormStyles from './Styles'
import { withStyles } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {PropsBooleanField} from '../../typescript/Action/props_interface'


const Display = ({field, passedValue, updateField, invalidities}: PropsBooleanField) => {
  const {label, key, description, validate} = field
  let instruction = (): string => ShowInstruction(validate, invalidities)

  return (
    <div>
      <FormControlLabel
          label={label} 
          control={
              <Checkbox
                  onChange={() => updateField(key, !passedValue)}
                  value={passedValue || ''} 
              />
          } 
      />
      <div>
        <i>
          {description}
        </i>
      </div>
      <span style={{color: "red"}}>{instruction()}</span>
    </div>
  )
}

export default withStyles(DynamicFormStyles)(Display)