import { createComment } from "@/Redux/Comment/CommentAction";
import { AppDispatch, RootState } from "@/Redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Comment({ postId }) {
  console.log("Commne tpost : ", postId);

  const dispatch = useDispatch<AppDispatch>()
  const {comment}=useSelector((state:RootState)=>state.Comment)
  const [content, setContent] = useState("");

  console.log(comment);
  

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createComment({ content, postId }));
        setContent(""); 
  };
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
              <form onSubmit={handleCommentSubmit}>
                <div className="">
                  <textarea
                    name="comment"
                    placeholder="Write your comment here"
                    cols="30"
                    rows="6"

                    className="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring"                    value={content}
                    onChange={handleCommentChange}
                  ></textarea>
                </div>
                <div className="float-right my-2">
                  <input
                    type="submit"
                    value="Post Comment"
                    className="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-emerald-700 px-4 hover:bg-emerald-800 text-center text-sm font-medium normal-case text-white opacity-100 outline-none"                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
