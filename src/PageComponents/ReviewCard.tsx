import React, { useEffect, useState } from "react";
import im1 from "../styles/home1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { fetchCommentsByPostId } from "@/Redux/Comment/CommentAction";
import { Box, Button, Flex, Input, Text, SimpleGrid } from '@chakra-ui/react';

const ITEMS_PER_PAGE = 5;
export default function ReviewCard({ postId }) {
  const dispatch = useDispatch<AppDispatch>();
  const { allComment } = useSelector((state: RootState) => state.Comment);
  const [currentPage, setCurrentPage] = useState(1);

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
  const totalPages = Math.ceil(sortedComments.length / ITEMS_PER_PAGE);
  const currentItems = sortedComments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  return (
    <div>
      {currentItems.map((comment, index) => (
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
             {comment.content}
            </p>
            <div className="mt-5 flex items-center justify-between text-gray-600"></div>
          </div>
        </div>
      ))}
      <Flex justify="center" align="center">
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          isDisabled={currentPage === 1}
          mr={2}
        >
          Previous
        </Button>
        <Text mx={4}>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          isDisabled={currentPage === totalPages}
          ml={2}
        >
          Next
        </Button>
      </Flex>
    </div>
  );
}
