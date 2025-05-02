import React from "react";

function PartyInvite() {
  const options = [
    { id: "mains", value: "Mains" },
    { id: "salad", value: "Salad" },
    { id: "dessert", value: "Dessert" },
    { id: "drinks", value: "Drinks" },
    { id: "sidesOrAppetizers", value: "Sides/Appetizers" },
  ];
  return (
    <div
      style={{ backgroundColor: "#e7ecee" }}
      className="flex items-center flex-col max-w-screen-2xl"
    >
      <div className="w-2xl space-y-4 bg-white border-t-8 border-t-blue-500 p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-3xl">Party Invite</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            quis sem odio. Sed commodo vestibulum leo, sit amet tempus odio
            consectetur in.
          </p>
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">What is your name?</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Which position(s) are you interested in?</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center bg-gray-100">
            <input
              type="checkbox"
              name="feedbackType"
              id="yes"
              value="yes"
              className="h-4 w-4 text-blue-600 m-2"
            />
            <label htmlFor="yes" className="ml-2 text-gray-700 m-2">
            Yes,  I'll be there
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center bg-gray-100">
            <input
              type="checkbox"
              name="feedbackType"
              id="no"
              value="no"
              className="h-4 w-4 text-blue-600 m-2"
            />
            <label htmlFor="no" className="ml-2 text-gray-700 m-2">
            Sorry, can't make it
            </label>
          </div>
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">How many of you are attending?</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">What will you be bringing?</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Let us know what kind of dish(es) you'll be bringing</h1>
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
          <h1 className="text-lg">Do you have any allergies or dietary restrictions?</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">What is your email address?</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>

    </div>
  );
}

export default PartyInvite;
