import React from 'react';
interface ComponentEmbedProps {
  path: string;
  height?: string;
}
export const ComponentEmbed = ({ path, height = '300px' }: ComponentEmbedProps) => {
  let iframeSrc = `https://developers.grafana.com/ui/canary/index.html?path=${path}&full=1&shortcuts=false&singleStory=true`;

  return <iframe src={iframeSrc} width="100%" height={height} />;
};
