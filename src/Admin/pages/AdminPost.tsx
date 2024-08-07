import { getAllPostsAdmin, updatePostStatus } from "@/Redux/Admin/AdminPostAction";
import { AppDispatch, RootState } from "@/Redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AdminPost() {
  const dispatch = useDispatch<AppDispatch>();
  const { allAdminPost } = useSelector((state: RootState) => state.AdminPost);
  const [filterStatus, setFilterStatus] = useState<string>("");

  useEffect(() => {
    dispatch(getAllPostsAdmin());
  }, [dispatch]);

  const handleStatusChange = (postId: number, newStatus: string) => {
    console.log("Post ID:", postId);
    console.log("New Status:", newStatus);
    dispatch(updatePostStatus({ postId, newStatus }));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
  };

  // Filter posts based on the selected status
  const filteredPosts = allAdminPost.filter((post) =>
    filterStatus ? post.postStatus === filterStatus : true
  );

  return (
    <div>
      <div className="">
        <div className="mx-auto max-w-screen-lg px-2">
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-base font-bold text-gray-900">
              Latest Payments
            </p>

            <div className="mt-4 sm:mt-0">
              <p>.</p>
              <div className="flex items-center justify-start sm:justify-end">
              <div className="flex items-center">
                  <label
                    htmlFor="filterStatus"
                    className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"
                  >
                    Filter by Status:
                  </label>
                  <select
                    id="filterStatus"
                    className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    <option value="PENDING">PENDING</option>
                    <option value="ACCEPTED">ACCEPTED</option>
                    <option value="REJECTED">REJECTED</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"
                >
                  <svg
                    className="mr-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      className=""
                    ></path>
                  </svg>
                  Export to CSV
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border shadow">
            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    PostId
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Title
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Date
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Change Status
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Status
                  </td>
                </tr>
              </thead>

              <tbody className="lg:border-gray-300">
                {
                  filteredPosts.map((post) => (
                    <tr key={post.id} className="">
                      <td className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        {String(post.id)}
                      </td>
                      <td className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        {post.title}
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        07 February, 2022
                      </td>

                      <td>
                      <select
                          className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                          onChange={(e) => handleStatusChange(post.id, e.target.value)}
                          value={post.postStatus}
                        >
                          <option value="PENDING" className="whitespace-no-wrap text-sm">
                            PENDING
                          </option>
                          <option value="ACCEPTED" className="whitespace-no-wrap text-sm">
                            ACCEPTED
                          </option>
                          <option value="REJECTED" className="whitespace-no-wrap text-sm">
                            REJECTED
                          </option>
                        </select>
                      </td>
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                      <div
                          className={`inline-flex items-center rounded-full py-2 px-3 text-xs text-white ${
                            post.postStatus === "ACCEPTED"
                              ? "bg-green-600"
                              : post.postStatus === "REJECTED"
                              ? "bg-red-600"
                              : "bg-gray-400"
                          }`}
                        >
                          {post.postStatus}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
