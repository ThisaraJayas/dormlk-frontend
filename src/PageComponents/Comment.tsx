import React from "react";

export default function Comment({ postId }) {
  console.log("Commne tpost : ", postId);

  return (
    <div>
      <div className="">
        <div className="mx-auto max-w-screen-sm px-4">
          <div className="-ml-20 flex p-4 text-left text-gray-700">
            <img
              className="mr-5 h-12 w-12 rounded-full"
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt=""
            />
            <div className="w-full space-y-3 text-gray-700">
              <div className="">
                <textarea
                  name="comment"
                  id=""
                  placeholder="Write your comment here"
                  cols="30"
                  rows="6"
                  className="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring"
                ></textarea>
              </div>
              <div className="float-right">
                <input
                  type="submit"
                  value="Post Comment"
                  className="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-emerald-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none focus:ring"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
