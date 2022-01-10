import { Icons } from "../../../../attorn-react-components/src/ui-components/icon/lib/types"
import { Methods } from "../../../../attorn-react-components/src/ui-components/explorer/lib/typing"

type Method = {
  name: Methods;
  icon: {
    full: Icons;
    abbr: Icons;
  };
  color: string;
}

export const methods: Method[] = [
  { name: 'post', color: '#3AE374', icon: { full: 'method-post', abbr: 'method-abbr-post' } },
  { name: 'get', color: '#17C0EB', icon: { full: 'method-get', abbr: 'method-abbr-get' } },
  { name: 'patch', color: '#FFFA65', icon: { full: 'method-patch', abbr: 'method-abbr-patch' } },
  { name: 'delete', color: '#FF4D4D', icon: { full: 'method-delete', abbr: 'method-abbr-delete' } },
  { name: 'put', color: '#FFAF40', icon: { full: 'method-put', abbr: 'method-abbr-put' } },
  { name: 'copy', color: '#F78FB3', icon: { full: 'method-copy', abbr: 'method-abbr-copy' } },
  { name: 'head', color: '#FFDA79', icon: { full: 'method-head', abbr: 'method-abbr-head' } },
  { name: 'options', color: '#FFB8B8', icon: { full: 'method-options', abbr: 'method-abbr-options' } },
  { name: 'link', color: '#C44569', icon: { full: 'method-link', abbr: 'method-abbr-link' } },
  { name: 'unlink', color: '#C44569', icon: { full: 'method-unlink', abbr: 'method-abbr-unlink' } },
  { name: 'purge', color: '#E77F67', icon: { full: 'method-purge', abbr: 'method-abbr-purge' } },
  { name: 'lock', color: '#CAD3C8', icon: { full: 'method-lock', abbr: 'method-abbr-lock' } },
  { name: 'unlock', color: '#CAD3C8', icon: { full: 'method-unlock', abbr: 'method-abbr-unlock' } },
  { name: 'propfind', color: '#C4E538', icon: { full: 'method-propfind', abbr: 'method-abbr-propfind' } },
  { name: 'view', color: '#4AB148', icon: { full: 'method-view', abbr: 'method-abbr-view' } },
];

