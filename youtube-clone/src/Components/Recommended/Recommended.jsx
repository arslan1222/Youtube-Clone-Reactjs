import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { assets } from "../../assets/assets.js";
import moment from "moment";
import { valueConverter } from "../../data.js";
import { Link } from "react-router-dom";


const Recommended = ({ categoryId }) => {
  //Fetching related data
  const [apiData, setApiData] = useState([]);

  const API_KEY = import.meta.env.VITE_API_BASE_URL;

  const fetchData = async () => {
    const relatedVideosUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    await fetch(relatedVideosUrl)
      .then((response) => response.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, index) => (
        <Link
          to={`/video/${item.snippet.categoryId}/${item.id}`}
          key={index}
          className="side-video-list"
        >
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>
              {valueConverter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
