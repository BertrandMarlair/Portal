import moment from 'moment'
import {InvaliditiesType, InvalidityType} from '../typescript/Action/validation_interfaces'

const required = (value: string): InvalidityType | void => {
    if (!value) return {
        error: "required"
    }
}

export const Validators: any = {
    StringInput:{
        required,
        regEx: (value: string, validate: any): InvalidityType | void => {
            const regex_tester = new RegExp(validate.regEx.expect)
            if (!regex_tester.test(value)) return {
                error: "regEx"
            }
        }
    },
    DateField: {
        required: (value: any) => {
            if (!value || value === "Invalid date") return {
                error: "required"
            }
        },
        max: (value: string, validate: any) => {
            const max = moment(validate.max.expect, "YYYYMMDD").format('YYYYMMDD')
            if (max === "Invalid date" || Number(max) < Number(value)) return {
                error: "max"
            }
        },
        min: (value: string, validate: any) => {
            const min = moment(validate.min.expect, "YYYYMMDD").format('YYYYMMDD')
            if (min === "Invalid date" || Number(min) > Number(value)) return {
                error: "min"
            }
        }
    },
    RadioButtons: {
        required
    },
    CheckBox: {
        mustOptIn: (value: any) => {
            if (!value) return {
                error: "mustOptIn"
            } 
        }
    }
}

export const ValidatorMiddleware = (initialState: any, field: any, value: any): InvaliditiesType => {
    const {key, fieldType, validate} = field
    const state_workcopie = new Map(initialState)
    const key_invalidities: InvalidityType[] = []
    
    for (let validator in validate) {
        let invalidity = Validators[fieldType][validator](value, validate)
        if (invalidity) {
            key_invalidities.push(invalidity)
            console.log("Validators", key, invalidity.error)
        }
    }

    if (key_invalidities.length > 0) {
        state_workcopie.set(key, key_invalidities)
    } else {
        state_workcopie.delete(key)
    }

    return state_workcopie
}

export const ShowInstruction = (validationObj: any, invalidities: Array<any>): string => {
    if (invalidities && invalidities.length > 0) {
        return validationObj[invalidities[0].error].instruction
    }
    // else
    return ""
}
