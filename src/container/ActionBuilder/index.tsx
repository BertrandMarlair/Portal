import React, { useState, useEffect } from 'react'
import { ValidatorMiddleware } from '../../services/ActionParamsValidator'
import { InvaliditiesType } from '../../typescript/Action/validation_interfaces'
import ActionParamsTypes from '../../component/ActionParams'

import apiMock from '../../api-mock/api-mock'

// const data: DynamicFormType = formConfig
type ConfigData = {
    formLabel: string;
    fields: Array<any>;
};

const Display = () => {
    const [formConfig, setFormConfig]: [any, any] = useState({formLabel: '', fields: []})
    const [fieldsValues, setFieldsValues]: [any, any] = useState({})
    const [invalidities, setInvalidities]: [any, any] = useState(new Map())

    // empty list at the end of useEffect simulate componentDidMount
    useEffect(() => {
        apiMock.asyncGetCall('/form_config').then(resp => {
            initForm(resp.data)
        }).catch(err => {
            throw err
        })
    }, [])

    const initForm = (data: ConfigData) => {
        setFormConfig(data)
        const values: any = {}

        data.fields.forEach(field => {
            values[field.key] = field.value || ''
        })

        setFieldsValues(values)
    }

    const checkValidities = (key: string, value: any): void => {
        const field: any = formConfig.fields.find((item: any) => item.key === key)
        const stateWorkcopie: InvaliditiesType = ValidatorMiddleware(invalidities, field, value)
        // the invalidities state has a map data structure,
        // it works basically like arrays and object had an incestious baby
        // see mdn docs here: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map

        if (
            JSON.stringify(invalidities.get(key)) !== JSON.stringify(stateWorkcopie.get(key))
        ) {
            setInvalidities(stateWorkcopie)
        }
    }

    const updateField = (key: string, value: any) => {
        setFieldsValues({...fieldsValues, [key]: value,})
        checkValidities(key, value)
    }

    return(
        <div>
            <h1>{formConfig.formLabel}</h1>
            {invalidities.size ? <div style={{color: "red"}}>{invalidities.size} fields require your attention</div> : null}
            <form noValidate>
            {
                formConfig.fields.map((field: any) => {
                    const {key, fieldType, dependency} = field
                    const Param = ActionParamsTypes[fieldType]
                    return(
                        <Param 
                            field={field}
                            key={key}
                            passedValue={fieldsValues[key]}
                            dependencyValue={(dependency && fieldsValues[dependency.keyName]) || ""}
                            updateField={updateField}
                            invalidities={invalidities.get(key)}
                        />
                    )
                })
            }
            </form>
        </div>
    )
}

export default (Display)