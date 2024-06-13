"use client";
import { Box, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import "./VideoSec.css";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const VideoSec = ({ videoLessons }) => {
  const [videoId, setVideoId] = useState(videoLessons[0].IDVideo);

  const { user } = useUser();
  const [view, setView] = useState(videoLessons[0].TitleOfLesson);

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  const playerRef = useRef(null);




  const videoSrc = {
    type: "video",
    sources: [
      {
        src: videoId,
        provider: "youtube",
      },
    ],
  };

  return (
    <Stack
      flexWrap={"wrap"}
      gap={3}
      my={5}
      sx={{
        justifyContent: { xs: "center", sm: "center", lg: "space-between" },
        flexDirection: "row",
      }}
    >
      <Box className="sec-video-palyer">
        {/* <iframe width="100%" height="100%" style={{borderRadius:"20px"}} src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <Plyr
          source={videoSrc}
          options={{
            keyboard: { focused: false, global: true },
            storage: { enabled: true, key: `plyr` },
            clickToPlay: true,
            seekTime: 10,
            quality: true,
            speed: {
              selected: 1,
              options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
            },
          }}
          ref={playerRef}
         
          
        />
      </Box>

      <Box className="sec-play-list-video">
        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          exclusive
          onChange={handleChange}
        >
          {videoLessons.map((item) => {
            return (
              <ToggleButton
                onClick={() => {
                  setVideoId(item.IDVideo);
                }}
                disabled={user ? (item.disabled = false) : item.disabled}
                value={item.TitleOfLesson}
                aria-label="list"
                key={item}
              >
                {item.TitleOfLesson} <span>({item.Time})</span>
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Box>
    </Stack>
  );
};

export default VideoSec;
