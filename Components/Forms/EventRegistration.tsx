import React from "react";

function EventRegistration() {
  const options = [
    { id: "Comments", value: "Comments" },
    { id: "Questions", value: "Questions" },
    { id: "Bug reports", value: "Bug reports" },
    { id: "Feature Requests", value: "Feature Requests" },
  ];
  return (
    <div
      style={{ backgroundColor: "#e7ecee" }}
      className="flex items-center flex-col max-w-screen-2xl"
    >
      <div className="w-2xl space-y-4 bg-white border-t-8 border-t-blue-500 p-7 rounded m-3 shadow-xl">
        <div className="p-3 bg-gray-100">
          <h1 className="text-2xl">Event Registration</h1>
        </div>
        <div className="p-3 bg-gray-100">
          <p className="text-base flex flex-col">
            <span>Event Timing: January 4th-6th,2016 </span>
            <span>Event Address: 123 Your Street </span>
            <span>
              Your City, ST 12345 Contact us at (123) 456-7890 or
              <span className="text-blue-400"> no_reply@example.com </span>
            </span>
          </p>
        </div>
      </div>
      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Name</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Email</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Phone Number</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>
      
      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Organisation</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">What days will you attend?</h1>
        </div>
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <div key={option.id} className="flex items-center bg-gray-100">
              <input
                type="checkbox"
                name="feedbackType"
                id={option.id}
                value={option.value}
                className="h-4 w-4 text-blue-600 m-2"
              />
              <label htmlFor={option.id} className="ml-2 text-gray-700 m-2">
                {option.value}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Dietary restrictions</h1>
        </div>
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <div key={option.id} className="flex items-center bg-gray-100">
              <input
                type="checkbox"
                name="feedbackType"
                id={option.id}
                value={option.value}
                className="h-4 w-4 text-blue-600 m-2"
              />
              <label htmlFor={option.id} className="ml-2 text-gray-700 m-2">
                {option.value}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">I understand that I will have to pay $$ upon arrival*</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="checkbox" value={"Yes"} />
          <label className="ml-2 text-gray-700 m-2">
                Yes
              </label>
        </div>
      </div>

      
    </div>
  );
}

export default EventRegistration;
