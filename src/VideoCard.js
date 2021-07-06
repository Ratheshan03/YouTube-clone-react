import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import './VideoCard.css';
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";


function VideoCard({image, title, channel, views, timestamp, channelImage,verified }) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt=""/>
            <div className="videoCard__info">
                <Avatar
                  className="videoCard__avatar"
                  alt={channel}
                  src={channelImage}
                />
                <div className="videoCard__text">
                    <h4> {title} </h4>
                    <p>{channel} {verified && <VerifiedIcon className="videoCard__icon"/>}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
