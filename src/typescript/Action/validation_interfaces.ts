export interface InvalidityType {
    error: string,
    instruction?: string 
}

export type InvaliditiesType = Map<string, InvalidityType[]> | Map<unknown, unknown>

export interface check {
    instruction: string
}

export interface BaseValidation {
    required?: check
}

export interface TextValidation extends BaseValidation {
    regEx?: check & { expect: string },
    min?:check & { expect: number | string }, // minimun characters
    max?: check & { expect: number| string } // maximun characters
}

export interface NumberValidation extends BaseValidation {
    min?: check & { expect: number },
    max?: check & { expect: number }
}

export interface BooleanValidation {
    mustOptIn?: check & { expect: boolean }
}

export interface DateValidation extends BaseValidation {
    min?: check & { expect: string | Date },
    max?: check & { expect: string | Date }
}
// validators for date type done
export type ValidatorType = (DateValidation | BooleanValidation | NumberValidation | TextValidation)
