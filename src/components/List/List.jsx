import React, { useEffect, useState } from "react";
import axios from "axios";
// import movieList from "../../api/movieList.json";
function List() {
  const [movieList, setMovieList] = useState([]);
  async function getData() {
    try {
      const { data, status } = await axios.get("./api/data.json");
      setMovieList(data);
    } catch (error) {
      console.log(error);
    }
  }
  getData();

  return (
    <div className="bg-black pb-24 border-b-2 border-solid border-gray-800">
      <div className="relative overflow-hidden">
        <div>
          <h1 className="text-white font-semibold text-2xl ml-12 py-2">
            Drama
          </h1>
        </div>
        <div className="relative">
          <div className="slider-arrow absolute flex items-center justify-center h-full w-10 text-4xl z-10">
            <i className="fa-solid fa-chevron-left" />
          </div>
          <div className="slider-arrow absolute flex items-center justify-center h-full w-10 text-4xl right-0 z-10">
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="slider-items flex w-max" id="slider-items">
            <ListItem
            <div className="mr-2">
              <img src="images/item.jpg" alt="item" />
            </div>
            <div className="mr-2">
              <img src="images/item.jpg" alt="item" />
            </div>
            <div className="mr-2">
              <img src="images/item.jpg" alt="item" />
            </div>
            <div className="mr-2">
              <img src="images/item.jpg" alt="item" />
            </div>
            <div className="mr-2">
              <img src="images/item.jpg" alt="item" />
            </div>
            <div className="mr-2">
              <img src="images/item.jpg" alt="item" />
            </div>
            <div className="mr-2">
              <img src="images/item.jpg" alt="item" />
            </div>
            <div className="mr-2">
              <img src="images/item.jpg" alt="item" />
            </div>
            <div className="mr-2">
              <img src="images/item.jpg" alt="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
