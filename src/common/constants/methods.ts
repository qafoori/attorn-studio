import { Icons } from "../../../../attorn-react-components/src/ui-components/icon/lib/types"
import { Methods } from "../../../../attorn-react-components/src/ui-components/explorer/lib/typing"

type Method = {
  name: Methods;
  icon: {
    full: Icons;
    abbr: Icons;
  }
}

export const methods: Method[] = [
  { name: 'copy', icon: { full: 'method-copy', abbr: 'method-abbr-copy' } },
  { name: 'delete', icon: { full: 'method-delete', abbr: 'method-abbr-delete' } },
  { name: 'get', icon: { full: 'method-get', abbr: 'method-abbr-get' } },
  { name: 'head', icon: { full: 'method-head', abbr: 'method-abbr-head' } },
  { name: 'link', icon: { full: 'method-link', abbr: 'method-abbr-link' } },
  { name: 'lock', icon: { full: 'method-lock', abbr: 'method-abbr-lock' } },
  { name: 'options', icon: { full: 'method-options', abbr: 'method-abbr-options' } },
  { name: 'patch', icon: { full: 'method-patch', abbr: 'method-abbr-patch' } },
  { name: 'post', icon: { full: 'method-post', abbr: 'method-abbr-post' } },
  { name: 'propfind', icon: { full: 'method-propfind', abbr: 'method-abbr-propfind' } },
  { name: 'purge', icon: { full: 'method-purge', abbr: 'method-abbr-purge' } },
  { name: 'put', icon: { full: 'method-put', abbr: 'method-abbr-put' } },
  { name: 'unlink', icon: { full: 'method-unlink', abbr: 'method-abbr-unlink' } },
  { name: 'unlock', icon: { full: 'method-unlock', abbr: 'method-abbr-unlock' } },
  { name: 'view', icon: { full: 'method-view', abbr: 'method-abbr-view' } },
];

