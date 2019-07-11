import * as ValTypes from "./validation_interfaces"

export type FieldTypeString = (
    "StringInput" | 
    "TextArea" | 
    "IntegerField" | 
    "FloatField" | 
    "AddressField" |
    "DropDown" |
    "LookupField" |
    "MultiSelect" |
    "MultiSelectLookup" |
    "RadioButtons" |
    "DateTimeField" |
    "DateField" |
    "TimeField" |
    "CheckBox" |
    "SwitchButton"
)

interface Field {
    key: string,
    label: string,
    value?: any,
    fieldType: FieldTypeString,
    dependency?: {keyName: string, selectionSrc?: string}
}

export interface TextTypeField extends Field {
    value?: string,
    validate: ValTypes.TextValidation,
}

export interface NumberTypeField extends Field {
    value?: number,
    validate: ValTypes.NumberValidation
}

export interface BooleanTypeField extends Field {
    value?: number,
    description?: string,
    validate: ValTypes.BooleanValidation

}

export interface DateTimeTypeField extends Field {
    value?: string | Date,
    validate: ValTypes.DateValidation
}

interface SelectionItem {
    itemLabel: string,
    itemValue: string | number
}

export interface SelectTypeField extends Field {
    selection: Array<SelectionItem>,
    value?: string | number | Array<string | number>,
    validate?: ValTypes.BaseValidation
}

export type FieldType = (TextTypeField|NumberTypeField|DateTimeTypeField|SelectTypeField|BooleanTypeField)

export interface DynamicFormType {
    formLabel: string,
    fields: Array<any>
}
