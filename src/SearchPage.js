import React from 'react';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';
import VideoRow from './VideoRow';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AKedOLR-pT_JEsz_hcaA4Gjx8DHcqJ8mS42aTRqcVy6P7w=s176-c-k-c0x00ffffff-no-rj"
                channel="Marques Brownlee"
                verified
                subs="14.3M"
                noOfVideos={2330}
                description="MKBHD | Quality Tech Videos"
            />

            <hr/>
            <VideoRow 
                views="2.1M"
                subs="14.3M"
                description="Quality Tech Videos"
                timestamp="5 days ago"
                channel="Marques Brownlee"
                title="Sony Xperia 1 III: The Ultimate Enthusiast Phone!"
                image="https://i.ytimg.com/vi/CghqH21A2Ew/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlvVK5w1AJ2HejwmDakn4ACpTKKA"
            />
             <VideoRow 
                views="4.4M"
                subs="14.3M"
                description="Quality Tech Videos"
                timestamp="3 day ago"
                channel="Marques Brownlee"
                title="iOS 15 Hands-On: Top 5 New Features!"
                image="https://i.ytimg.com/vi/O1sZcX-BBSA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKDRKpVHioCeDbnt7hh98gnboXKA"
            />
            <VideoRow 
                views="1.4M"
                subs="14.3M"
                description="Quality Tech Videos"
                timestamp="2 weeks ago"
                channel="Marques Brownlee"
                title="Top 5 Android 12 Features: Huge Redesign!"
                image="https://i.ytimg.com/vi/FITTkh-kf6g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR6Etc8XyL0zClu43fSaq5CM0DtA"
            />
             <VideoRow 
                views="2.4M"
                subs="14.3M"
                description="Quality Tech Videos"
                timestamp="1 month ago"
                channel="Marques Brownlee"
                title="Talking Tech and AI with Google CEO Sundar Pichai!"
                image="https://i.ytimg.com/vi/n2RNcPRtAiY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIje1sQMLVtCbhoV4lJQE0MTB2_g"
            />
             <VideoRow 
                views="3.6M"
                subs="14.3M"
                description="Quality Tech Videos"
                timestamp=" 3 weeks ago"
                channel="Marques Brownlee"
                title="Why iPhone's Features are Always 'Late'"
                image="https://i.ytimg.com/vi/wGKb3oUo8go/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpCOUTjW61etJIcfVKg3k0ITXJrA"
            />
        </div>
    );
}

export default SearchPage; 
