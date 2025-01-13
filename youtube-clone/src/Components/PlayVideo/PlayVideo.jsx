import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import { assets } from '../../assets/assets'
import { valueConverter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {

    const {videoId} = useParams();

    // Data about videos
    const [apiData, setApiData] = useState(null);

    // Data about channels
    const [channelData, setChannelData] = useState(null);

    // Comments data
    const [commentData, setCommentData] = useState([]);

    // Youtube API Key
    const API_KEY = import.meta.env.VITE_API_BASE_URL;

    // Fetching videos data
    const fetchVideoData = async()=>{ // Fetching videos data
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        
        await fetch(videoDetailsUrl).then(response=>response.json()).then(data => setApiData(data.items[0])); // Now we have got parsed data

    }

    // Fetching Channels data
    const fetchChannelData = async () => {
        const channelDetailsUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

        await fetch(channelDetailsUrl).then(response=>response.json()).then(data => setChannelData(data.items[0]));

        // Fetching Comments data
        const commentsUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${API_KEY}`;
        console.log(commentsUrl);

        await fetch(commentsUrl).then(response => response.json()).then(data => setCommentData(data.items)) 
    }

    // Truncate the comment section
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    

    useEffect(()=>{
        fetchVideoData();
    }, [videoId]);

    useEffect(()=>{
        fetchChannelData();
        // fetchCommentsData();
    }, [apiData]);

  return (
    <div className='play-video'>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>{valueConverter(apiData ? apiData.statistics.viewCount : "10K")} views &bull; {apiData
         ? moment(apiData.snippet.publishedAt).fromNow() : "2 days ago"}</p>
        <div>
            <span><img src={assets.like} alt="" />{valueConverter(apiData ? apiData.statistics.likeCount: 100)}</span>
            <span><img src={assets.dislike} alt="" /></span>
            <span><img src={assets.share} alt="" /> Share</span>
            <span><img src={assets.save} alt="" /> Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
        <div>
            <p>{apiData ? apiData.snippet.channelTitle : "How i Grow"}</p>
            <span>{valueConverter(channelData ? channelData.statistics.subscriberCount: "250")} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className={`vid-description ${isExpanded ? "expand" : "truncate"}`} onClick={toggleExpand}>
        <p>{apiData ? apiData.snippet.description.slice(0,200): 'Description'}</p>

        <hr />
        <h4>{valueConverter(apiData ? apiData.statistics.commentCount : 78)} Comments</h4>
        {/* Comments data */}
        {
            commentData.map((item, index)=>{
                
                return (
                    <div key={index} className='comment'>
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className='comment-action'>
                                <img src={assets.like} alt="" />
                                <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={assets.dislike} alt="" />
                            </div>
                        </div>
            </div>
                )
                
            })
        }
        
      </div>
    </div>
  )
}

export default PlayVideo
