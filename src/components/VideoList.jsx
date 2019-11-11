import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  return (
    <div className="video-list">
      {props.videos.map((video, index) =>
        <VideoListEntry
          video={video}
          key={index}
          index={index}
          handleClick={props.handleClick}
        />
      )}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};
export default VideoList;
