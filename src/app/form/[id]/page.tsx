import React from 'react'
import CustomerFeedback from '../../../../Components/Forms/CustomerFeedback'

function page({params} : any) {
    if(params.id === 'customerFeedback')
        return <CustomerFeedback/>
  return (
    <div>page</div>
  )
}

export default page