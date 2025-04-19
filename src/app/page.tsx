import UserForms from "../../Components/UserForms";

export default function Home() {
  return (
    <>
    <div className="flex max-w-screen items-center justify-center bg-gray-100">
      <div className="max-w-5xl m-5 space-y-6 flex flex-col px-10">
        <h1 className="text-2xl font-semibold">Start a new form</h1>
        <div className="flex flex-wrap gap-4 gap-y-8">
          <div className="space-y-2">
            <img className="rounded border border-gray-200 w-44 h-32" src="images/addBlank.png" alt="" />
            <h2 className="text-base font-medium ">Blank</h2>
          </div>
          <div className="space-y-2">
            <img className="rounded border border-gray-200 w-44 h-32" src="images/customerFeedback.png" alt="" />
            <h2 className="text-base font-medium ">Customer Feedback</h2>
          </div>
          <div className="space-y-2">
            <img className="rounded border border-gray-200 w-44 h-32" src="images/eventRegistration.png" alt="" />
            <h2 className="text-base font-medium ">Event Registration</h2>
          </div>
          <div className="space-y-2">
            <img className="rounded border border-gray-200 w-44 h-32" src="images/jobApplication.png" alt="" />
            <h2 className="text-base font-medium ">Job Application</h2>
          </div>
          <div className="space-y-2">
            <img className="rounded border border-gray-200 w-44 h-32" src="images/contactInformation.png" alt="" />
            <h2 className="text-base font-medium ">Contact Information</h2>
          </div>
          <div className="space-y-2">
            <img className="rounded border border-gray-200 w-44 h-32" src="images/courseEvaluation.png" alt="" />
            <h2 className="text-base font-medium ">Course Evaluation</h2>
          </div>
          <div className="space-y-2">
            <img className="rounded border border-gray-200 w-44 h-32" src="images/partyInvite.png" alt="" />
            <h2 className="text-base font-medium ">Party Invite</h2>
          </div>
          <div className="space-y-2">
            <img className="rounded border border-gray-200 w-44 h-32" src="images/orderForm.png" alt="" />
            <h2 className="text-base font-medium ">Order Form</h2>
          </div>
        </div>
      </div>
    </div>
    <UserForms/>
    </>
  );
}
