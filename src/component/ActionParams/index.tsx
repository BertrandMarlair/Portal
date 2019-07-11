// import { lazy } from 'react'
// Lazy loading is not a good option for component that are constantly rerendered
// Because the component get reloaded at each render
import StringInput from './StringInput'
import DateField from './DateField'
import RadioButtons from './RadioButtons'
import CheckBox from './CheckBox'

const FieldTypes: any = {
    StringInput,
    DateField,
    RadioButtons,
    CheckBox
}

export default FieldTypes
