import React, { useEffect } from "react";
import im1 from "../styles/home1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { fetchCommentsByPostId } from "@/Redux/Comment/CommentAction";

export default function ReviewCard({ postId }) {
  const dispatch = useDispatch<AppDispatch>();
  const { allComment } = useSelector((state: RootState) => state.Comment);

  useEffect(() => {
    dispatch(fetchCommentsByPostId(postId));
  }, [dispatch, postId]);

  console.log("COOO: ", allComment);

  const formatDateTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
  };

  const sortedComments = [...allComment].sort(
    (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
  );

  return (
    <div>
      {sortedComments.map((comment, index) => (
        <div
          key={index}
          className="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8"
        >
          <img
            className="mr-5 block h-10 w-10 max-w-full text-left rounded-full align-middle sm:h-16 sm:w-16"
            src={im1}
            alt="Profile Picture"
          />
          <div className="w-full text-left">
            <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
              <h3 className="font-medium">
                {comment.user.firstName} {comment.user.lastName}
              </h3>
              <time className="text-xs" dateTime={comment.createdDateTime}>
                {formatDateTime(comment.createdDateTime)}
              </time>{" "}
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing
              eliggggggggggggfgegeh grgh rrtrtt!
            </p>
            <div className="mt-5 flex items-center justify-between text-gray-600"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
