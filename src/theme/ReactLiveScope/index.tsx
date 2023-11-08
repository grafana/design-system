import * as ui from '@grafana/ui';
import { users } from '@site/src/data';
import { useColumns } from '@site/src/components/templates/TablePage/useColumns';
import { Page } from '@site/src/components/templates/Page/Page';

// Components must be added to this object in order for them to be "in scope" inside the live code previews
const ReactLiveScope = {
  ...ui,
  users,
  useColumns,
  Page,
};

export default ReactLiveScope;
