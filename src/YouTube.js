import React from "react";
import PropTypes from "prop-types";
import "./YouTube.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className="relative flex flex-wrap bg-white justify-center items-center">
    <iframe
      width="853"
      height="480"
      className="md:px-12 md:py-3 md:my-32 sm:px-12 px-6 py-32"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
