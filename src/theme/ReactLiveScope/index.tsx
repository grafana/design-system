import * as ui from '@grafana/ui';

// Components must be added to this object in order for them to be "in scope" inside the live code previews
const ReactLiveScope = {
  ...ui,
};

export default ReactLiveScope;
