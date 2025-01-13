import React from 'react'
import './PlayVideo.css'
import { assets } from '../../assets/assets'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={assets.video} controls autoPlay muted ></video>
      <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
      <div className="play-video-info">
        <p>3493 views &bull; 3 days ago</p>
        <div>
            <span><img src={assets.like} alt="" /> 210</span>
            <span><img src={assets.dislike} alt="" /> 8</span>
            <span><img src={assets.share} alt="" /> Share</span>
            <span><img src={assets.save} alt="" /> Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={assets.profile_icon} alt="" />
        <div>
            <p>How i Grow</p>
            <span>250K Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that grow up</p>
        <p>Subscribe How i Grow to learn how to grow</p>
        <hr />
        <h4>178 Comments</h4>
        <div className='comment'>
            <img src={assets.user_profile} alt="" />
            <div>
                <h3>Jason Roy <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, temporibus.</p>
                <div className='comment-action'>
                    <img src={assets.like} alt="" />
                    <span>199</span>
                    <img src={assets.dislike} alt="" />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={assets.user_profile} alt="" />
            <div>
                <h3>Jason Roy <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, temporibus.</p>
                <div className='comment-action'>
                    <img src={assets.like} alt="" />
                    <span>199</span>
                    <img src={assets.dislike} alt="" />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={assets.user_profile} alt="" />
            <div>
                <h3>Jason Roy <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, temporibus.</p>
                <div className='comment-action'>
                    <img src={assets.like} alt="" />
                    <span>199</span>
                    <img src={assets.dislike} alt="" />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={assets.user_profile} alt="" />
            <div>
                <h3>Jason Roy <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, temporibus.</p>
                <div className='comment-action'>
                    <img src={assets.like} alt="" />
                    <span>199</span>
                    <img src={assets.dislike} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
