import React from 'react';
import {PropsRadioField} from '../../typescript/Action/props_interface'
import { ShowInstruction } from '../../services/ActionParamsValidator'
import { useDependencyOfSelector } from "../../custom-hooks/action/DependencyHooks";
import Styles from './Styles'
import { withStyles } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioButtons = ({field, passedValue, dependencyValue, updateField, classes, invalidities}: PropsRadioField) => {
  const {label, key, selection, validate, dependency} = field
  const has_dependencies = !!dependency && !!dependency.keyName

  const handleChange = (value: string) => {
    updateField(key, value);
  }

  const {hideDependent, dependentSelection} = useDependencyOfSelector(
    dependency, dependencyValue, () => { if(passedValue !== "") handleChange("") }
  )

  let instruction = (): string => ShowInstruction(validate, invalidities)

  return (
    <div hidden={hideDependent}>
      <FormControl
        component="fieldset"
        className={classes.formControl}
      >
      <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          aria-label={key}
          className={classes.group}
          value={passedValue || ""}
          onChange={(e: any) => handleChange(e.target.value)}
        >
          { !has_dependencies ? 
            selection.map ((item, i) => (
              <FormControlLabel
                key={i}
                value={item.itemValue}
                control={<Radio color="primary" />}
                label={item.itemLabel}
                labelPlacement="end"
              />
            ))
            :
            dependentSelection.map((item: any, i: number) => (
              <FormControlLabel
                key={i}
                value={item.itemValue}
                control={<Radio color="primary" />}
                label={item.itemLabel}
                labelPlacement="end"
              />
            ))
          }
        </RadioGroup>
      </FormControl>
      <span id={'error-' + key} style={{color: "red"}}>{instruction()}</span>
    </div>
  );
}

export default withStyles(Styles)(RadioButtons)
