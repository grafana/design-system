import React from 'react';

export const ComponentEmbed = ({ path, propFragment, height = '300px' }) => {
  let iframeSrc = `https://developers.grafana.com/ui/canary/index.html?path=${path}&full=1&shortcuts=false&singleStory=true`;
  if (propFragment) {
    iframeSrc += `#${propFragment}`;
  }

  return <iframe src={iframeSrc} width="100%" height={height} />;
};
