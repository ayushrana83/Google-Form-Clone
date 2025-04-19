
function page() {
  return (
    <div className="h-screen max-w-screen-2xl flex items-center justify-center bg-[var(--bg-color)]">
      <div className="shadow-2xl rounded border-t-8 border-t-[var(--primary-color)] bg-gray-50" >
        {/* <div className="w-full rounded-full h-2 bg-[var(--primary-color)]"></div> */}
        <form className="w-full h-full space-y-4 p-7 text-lg">
          
            <h1 className="text-2xl font-semibold text-center text-purple-800">Sign in</h1>
            <div className="flex flex-col space-y-3">
              <label>Email</label>
              <input type="email" placeholder="Enter Email" className="outline-none  px-2 py-1 border-b shadow-2xl bg-gray-100" />
            </div>
            <div className="flex flex-col space-y-3">
              <label>Password</label>
              <input type="password" placeholder="Enter Password" className="outline-none  px-2 py-1 border-b shadow-2xl bg-gray-100" />
            </div>
          
          <button className="w-full bg-[var(--primary-color)] text-[var(--bg-color)] px-3 py-1 ">
            Login
          </button>
          <div className="text-base">
            Dont't have an account ?
            <span className="text-[var(--primary-color)]">Sign Up Here</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
