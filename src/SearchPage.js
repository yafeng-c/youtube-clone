import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
              image="https://cdn.pixabay.com/photo/2020/06/10/09/25/anemone-5281964_1280.jpg"
              channel="test Channel"
              verified
              subs="0"
              noOfVideos={20}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas, est reprehenderit maiores ex optio delectus magnam mollitia atque." />
              <hr />
            <VideoRow
              view="1"
              subs="0"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas, est reprehenderit maiores ex optio delectus magnam mollitia atque."
              timestamp="1 minute age"
              channel="test Channel"
              title="text title"
              image="https://cdn.pixabay.com/photo/2020/08/09/08/04/waterdrops-5474858__480.jpg"
             />
             <VideoRow
              view="1"
              subs="0"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas, est reprehenderit maiores ex optio delectus magnam mollitia atque."
              timestamp="1 minute age"
              channel="test Channel"
              title="text title"
              image="https://cdn.pixabay.com/photo/2020/08/09/08/04/waterdrops-5474858__480.jpg"
             />
             <VideoRow
              view="1"
              subs="0"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas, est reprehenderit maiores ex optio delectus magnam mollitia atque."
              timestamp="1 minute age"
              channel="test Channel"
              title="text title"
              image="https://cdn.pixabay.com/photo/2020/08/09/08/04/waterdrops-5474858__480.jpg"
             />
             <VideoRow
              view="1"
              subs="0"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas, est reprehenderit maiores ex optio delectus magnam mollitia atque."
              timestamp="1 minute age"
              channel="test Channel"
              title="text title"
              image="https://cdn.pixabay.com/photo/2020/08/09/08/04/waterdrops-5474858__480.jpg"
             />
             <VideoRow
              view="1"
              subs="0"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas, est reprehenderit maiores ex optio delectus magnam mollitia atque."
              timestamp="1 minute age"
              channel="test Channel"
              title="text title"
              image="https://cdn.pixabay.com/photo/2020/08/09/08/04/waterdrops-5474858__480.jpg"
             />

             <VideoRow
              view="1"
              subs="0"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas, est reprehenderit maiores ex optio delectus magnam mollitia atque."
              timestamp="1 minute age"
              channel="test Channel"
              title="text title"
              image="https://cdn.pixabay.com/photo/2020/08/09/08/04/waterdrops-5474858__480.jpg"
             />
        </div>
    )
}

export default SearchPage
