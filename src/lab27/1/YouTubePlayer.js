import {useEffect,useRef,useState}  from 'react'
import React  from 'react'
import YouTubePlayer from "youtube-player";
export const YoutubePlayer=(props) =>{
  const [videoId, setVideoId] = useState('su2kUpDkKK0');
  const[isPlaying,setIsPlaying]=useState(false)
  const playerDiv = useRef(null);
  const player = useRef(null);

  useEffect(function() {
    player.current =  YouTubePlayer(playerDiv.current);
  }, []);

  useEffect(function() {
    player.current.loadVideoById(videoId);
  }, [videoId]);

  useEffect(function() {
    isPlaying?player.current.playVideo():player.current.stopVideo();
  }, [isPlaying]);

  return (
      <div>
        <div>
        <select value={videoId} onChange={(e) => setVideoId(e.target.value)}>
          <option value={'su2kUpDkKK0'}>su2kUpDkKK0</option>
          <option value={'-ijA2Hn_7TQ'}>-ijA2Hn_7TQ</option>
        </select>
        </div>
        <div><button onClick={()=>setIsPlaying(!isPlaying)}>{isPlaying?'stop':'start'}</button></div>
        <div ref={playerDiv} />
      </div>
  );
}