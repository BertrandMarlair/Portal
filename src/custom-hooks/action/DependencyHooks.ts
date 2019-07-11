import {useState, useEffect} from 'react';
import apiMock from '../../api-mock/api-mock'

export const useDependencyOfSelector = (dependency: any, dependencyValue: string, cbFn: ()=>any = ()=>{}) => {
  const has_dependencies = !!dependency && !!dependency.keyName
  const [hideDependent, toggleDependent] = useState(has_dependencies)
  const [dependentSelection, setDependentSelection]: [any, any] = useState([])

  useEffect(() => {
    if (has_dependencies && !!dependencyValue){
      setDependentSelection([])
      cbFn()
      handleDependencyUpdated()
    }
  }, [dependencyValue])

  const handleDependencyUpdated = () => { 
      apiMock.asyncGetCall(
        (dependency && dependency.selectionSrc) + dependencyValue
      ).then(resp => {
        setDependentSelection(resp.data)
        toggleDependent(false)
      }).catch(err => {
          throw err
      })
  }

  return {hideDependent, dependentSelection}
}