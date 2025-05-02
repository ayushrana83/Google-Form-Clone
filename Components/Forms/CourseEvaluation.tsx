import React from "react";

function CourseEvaluation() {
  const options = [
    { id: 'degreeRequirement', value: 'Degree requirement' },
    { id: 'timeOffered', value: 'Time offered' },
    { id: 'interest', value: 'Interest' },
  ]
  return (
    <div
      style={{ backgroundColor: "#e7ecee" }}
      className="flex items-center flex-col max-w-screen-2xl"
    >
      <div className="w-2xl space-y-4 bg-white border-t-8 border-t-blue-500 p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-3xl">Course Evaluation</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <p className="text-base">
          Please submit feedback regarding the course you have just completed, including feedback on course structure, content, and instructor.
          </p>
        </div>
      </div>
      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Class Name</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>
      
      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Instructor</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>
      
      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">What aspects of this course were most useful or valuable?</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>

      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">How would you improve this course?</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>
      
      <div className="w-2xl space-y-4 bg-white p-7 rounded m-3 shadow-xl">
        <div className="p-2 bg-gray-100">
          <h1 className="text-lg">Why did you choose this course?</h1>
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
          <h1 className="text-lg">Rate the course form 1 to 5</h1>
        </div>
        <div className="p-2 bg-gray-100">
          <input type="text" placeholder="Short answer text" />
        </div>
      </div>
    </div>
  );
}

export default CourseEvaluation;
