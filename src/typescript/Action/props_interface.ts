import {TextTypeField, BooleanTypeField, SelectTypeField} from './interfaces'

interface PrototypeProps {
    updateField: (key: string, value: any) => void,
    classes?: any,
    invalidities: Array<any>,
}

export interface PropsTextField extends PrototypeProps {
    field: TextTypeField,
    passedValue: string
}

export interface PropsBooleanField extends PrototypeProps {
    field: BooleanTypeField,
    passedValue: boolean | ''
}

export interface PropsRadioField extends PrototypeProps {
    field: SelectTypeField,
    passedValue: string,
    dependencyValue?: any
}