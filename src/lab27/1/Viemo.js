import React, {useEffect, useRef, useState} from 'react'
import Player from '@vimeo/player';

export const Viemo = () => {

  const [videoId, setVideoId] = useState('66620530');

  const [isPlaying, setIsPlaying] = useState(false)
  const playerDiv = useRef(null);
  const player = useRef(null);

  useEffect(function () {
    player.current = new Player(playerDiv.current, {
      id: videoId,
      width: 640
    });
  }, []);

  useEffect(function () {
    player.current.loadVideo(videoId);
    if (isPlaying) {
      setIsPlaying(false)
    }
  }, [videoId]);

  useEffect(function () {
    if (isPlaying) {
      player.current.play();
    }
    else {
      player.current.pause();
    }
  }, [isPlaying]);

  return (
      <div>
        <div>
          <select value={videoId} onChange={(e) => setVideoId(e.target.value)}>
            <option value={'66620530'}>66620530</option>
            <option value={'165673992'}>165673992</option>
          </select>
        </div>
        <div>
          <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'stop'
              : 'start'}</button>
        </div>
        <div ref={playerDiv}/>
      </div>
  );
}