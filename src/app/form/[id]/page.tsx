import React from 'react'
import CustomerFeedback from '../../../../Components/Forms/CustomerFeedback'
import EventRegistration from '../../../../Components/Forms/EventRegistration'
import JobApplication from '../../../../Components/Forms/JobApplication'
import ContactInformation from '../../../../Components/Forms/ContactInformation'
import CourseEvaluation from '../../../../Components/Forms/CourseEvaluation'
import PartyInvite from '../../../../Components/Forms/PartyInvite'
import OrderForm from '../../../../Components/Forms/OrderForm'

function page({params} : any) {
    if(params.id === 'customerFeedback')
        return <CustomerFeedback/>
    else if(params.id === 'eventRegistration')
        return <EventRegistration/>
    else if(params.id === 'jobApplication')
        return <JobApplication/>
    else if(params.id === 'contactInformation')
        return <ContactInformation/>
    else if(params.id === 'courseEvaluation')
        return <CourseEvaluation/>
    else if(params.id === 'partyInvite')
        return <PartyInvite/>
    else if(params.id === 'orderForm')
        return <OrderForm/>
  return (
    <div>page</div>
  )
}

export default page