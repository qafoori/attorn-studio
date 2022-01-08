import { Methods } from "../../../../../attorn-react-components/src/ui-components/explorer/lib/typing"

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export type BreadcrumbItem = {
  title: string;
  onClick: () => void;
  method?: Methods;
}

