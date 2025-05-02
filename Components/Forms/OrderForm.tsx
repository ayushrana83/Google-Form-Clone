import React from "react";

function OrderForm() {
  const options = [
    { id: "color1", value: "Color 1" },
    { id: "color2", value: "Color 2" },
    { id: "color3", value: "Color 3" },
    { id: "color4", value: "Color 4" },
  ];
  return (
    <div
      style={{ backgroundColor: "#e7ecee" }}
      className="flex items-center flex-col max-w-screen-2xl"
    >
      <div className="w-2xl space-y-4 bg-white border-t-8 border-t-blue-500 p-7 rounded m-3 shadow-xl">
        <div className="p-3 bg-gray-100">
          <h1 className="text-2xl">Order Form</h1>
        </div>
        <div className="p-3 bg-gray-100">
          <p className="text-base flex flex-col">
            <span>
              After you fill out this order request, we will contact you to go
              over details and availability before the order is completed. If
              you would like faster service and direct information on current
              stock and pricing please contact us at Contact us at (123)456-7890
              or
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
          <h1 className="text-lg">Address</h1>
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
          <h1 className="text-lg">Are you a new or existing customer?</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center bg-gray-100">
            <input
              type="radio"
              name="feedbackType"
              id="yes"
              value="yes"
              className="h-4 w-4 text-blue-600 m-2"
            />
            <label htmlFor="yes" className="ml-2 text-gray-700 m-2">
              I am a new customer
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center bg-gray-100">
            <input
              type="radio"
              name="feedbackType"
              id="no"
              value="no"
              className="h-4 w-4 text-blue-600 m-2"
            />
            <label htmlFor="no" className="ml-2 text-gray-700 m-2">
              I am an existing customer
            </label>
          </div>
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">What is the item you would like to order?</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Please enter the product number</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">What color(s) would you like to order?</h1>
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
          <h1 className="text-lg">Preferred contact method</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center bg-gray-100">
            <input
              type="radio"
              name="feedbackType"
              id="yes"
              value="yes"
              className="h-4 w-4 text-blue-600 m-2"
            />
            <label htmlFor="yes" className="ml-2 text-gray-700 m-2">
              Email
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center bg-gray-100">
            <input
              type="radio"
              name="feedbackType"
              id="no"
              value="no"
              className="h-4 w-4 text-blue-600 m-2"
            />
            <label htmlFor="no" className="ml-2 text-gray-700 m-2">
              Phone
            </label>
          </div>
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">
          Questions and Comments
          </h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short Answer Text" />
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
