import React from "react";

function UserForms() {
  const temp = [
    {
      title: "Job Application",
      createdAt: "Apr 19, 2025",
      lastUpdatedAt: "Few seconds",
    },
    {
      title: "Order form",
      createdAt: "Apr 19, 2025",
      lastUpdatedAt: "20 minutes",
    },
    {
      title: "Contact Information",
      createdAt: "Apr 19, 2025",
      lastUpdatedAt: "1 hour",
    },
    {
      title: "Course Evaluation",
      createdAt: "Apr 19, 2025",
      lastUpdatedAt: "a minute",
    },
    {
      title: "Event Registration",
      createdAt: "Apr 19, 2025",
      lastUpdatedAt: "5 minutes",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center m-5 space-y-2">
      <div className="w-3xl grid font-medium text-lg grid-cols-11">
        <div className="col-span-4">Title</div>
        <div className="col-span-3">Created at</div>
        <div className="col-span-3">Last updated at</div>
        <div className="col-span-1">Action</div>
      </div>
      {temp.map((data, ind) => (
        <div key={ind} className="w-4xl grid grid-cols-11 p-2 text-lg items-center border-b">
          <div className="col-span-4 gap-2 flex items-center">
            <img src="/icons/GoogleForm.svg" className="w-10 h-9" alt=""/>
            {data.title}
          </div>
          <div className="col-span-3">{data.createdAt}</div>
          <div className="col-span-3">{data.lastUpdatedAt} ago</div>
          <div className="col-span-1">
            <img src="/icons/Action.svg" className="h-6 w-6" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserForms;
