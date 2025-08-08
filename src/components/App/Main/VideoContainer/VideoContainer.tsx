const VideoContainer = () => {
    return (
      <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src="https://www.youtube.com/embed/Oqdy702wczw?autoplay=1&mute=1&loop=1&playlist=Oqdy702wczw&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none" // отключает клики по плееру
          }}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
        />
      </div>
    );
  };
  
  export default VideoContainer;