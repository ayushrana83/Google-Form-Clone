import React from "react";

function JobApplication() {
  const options = [
    { id: 'Postion1', value: 'Postion 1' },
    { id: 'Postion2', value: 'Postion 2' },
    { id: 'Postion3', value: 'Postion 3' },
    { id: 'Postion4', value: 'Postion 4' }
  ]
  return (
    <div
      style={{ backgroundColor: "#e7ecee" }}
      className="flex items-center flex-col max-w-screen-2xl"
    >
      <div className="w-2xl space-y-4 bg-white border-t-8 border-t-blue-500 p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-3xl">Job Application</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis sem odio. Sed commodo vestibulum leo, sit amet tempus odio consectetur in. Mauris dolor elit, dignissim mollis feugiat maximus, faucibus et eros.
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
          <h1 className="text-lg">Which position(s) are you interested in?</h1>
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
            <label 
              htmlFor={option.id} 
              className="ml-2 text-gray-700 m-2"
            >
              {option.value}
            </label>
          </div>
        ))}
      </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Submit your cover letter or resume</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>
    </div>
  );
}

export default JobApplication;
