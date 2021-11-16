import React, { useLayoutEffect, useState } from "react";
import Song from './Song';
import { Stack } from 'react-bootstrap';

const Feed = (props) => {
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const fethData = async () => { 
      fetch('/api/home_feed')
        .then(data => data.json())
        .then(data => props.setSongs(data));
    }
  }, []);

  return(
    <div className="mt-3">
      <Stack gap={4}>
        { props.songs.length > 0 ? 

          props.songs.map(song => <Song key={song.id} song={song}/>) 
        : 
          <h1 className="text-center text-white mt-4">No songs available.</h1> 
        }
      </Stack>
    </div>
  )
};

export default Feed;