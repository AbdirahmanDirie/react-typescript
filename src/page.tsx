import React from 'react'
import Parent from './components/children/Parent'
import Child from './components/children/Child'
import Second from './components/children/Second'

const ChildrenPropExample = () => {
  return (
    <div>
        <Parent>
            <Second/>
        </Parent>
    </div>
  )
}

export default ChildrenPropExample