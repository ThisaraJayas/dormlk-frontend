import React, { useState } from 'react'

export default function SearchBox() {
    const [showRecommendations, setShowRecommendations] = useState(false);

    const handleSearchFocus = () => {
      setShowRecommendations(true);
    };
  
    const handleSearchBlur = () => {
      setTimeout(() => {
        setShowRecommendations(false);
      }, 200);
    };
  
  return (
    <div>
        <div className="relative flex-1 sm:flex-initial">
          <form
            className="hidden md:flex items-center"
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          >
            <input
              type="text"
              name="search"
              className="h-10 max-w-[600px] cursor-text rounded-md border bg-gray-100 py-2 pl-4 outline-none ring-emerald-200 hover:border hover:border-emerald-300 transition-all duration-200"
              placeholder="Search City, Campus.."
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
            <button
              type="submit"
              className="ml-0 inline-flex h-10 items-center justify-center rounded-r-md bg-emerald-500 py-2 px-4 text-center align-middle text-base font-medium normal-case text-white outline-none ring-emerald-200 ring-offset-1 focus:ring"
            >
              Search
            </button>
          </form>
          {showRecommendations && (
            <div className="absolute left-0 right-0 mt-2 divide-y rounded-b-xl border px-4 shadow-lg bg-white">
              <div className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white">
                <span className="m-0 font-medium">Ca</span>{" "}
                <span>lifornia</span>
              </div>
              <div className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white">
                <span className="m-0 font-medium">Ca</span> <span>nada</span>
              </div>
              <div className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white">
                <span className="m-0 font-medium">Ca</span> <span>mbodia</span>
              </div>
              <div className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white">
                <span className="m-0 font-medium">Ca</span> <span>meo</span>
              </div>
              <div className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white">
                <span className="m-0 font-medium">Ca</span> <span>rsville</span>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}
