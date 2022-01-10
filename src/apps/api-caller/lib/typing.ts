import { Methods } from "../../../../../attorn-react-components/src/ui-components/explorer/lib/typing"

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export type BreadcrumbItem = {
  title: string;
  onClick: () => void;
  method?: Methods;
}

export interface TabsProps {
  tabs: Tab[]
  onTabSelect: (tabKey: TabKeys) => void;
  activeTab: TabKeys;
}

export type Tab = {
  name: string;
  key: TabKeys;
  menu?: TabMenuItem[];
}

export type TabMenuItem = {
  name: string;
  key: TabKeys;
  no?: boolean;
}

export type TabKeys =
  // Tooler keys
  | 'BDY' | 'MLT' | 'GQL' | 'JSN'
  | 'XML' | 'YML' | 'EDN' | 'PLN'
  | 'OTR' | 'BIN' | 'NBD' | 'URL'
  | 'AUT' | 'JSC' | 'HTM' | 'INA'
  | 'API' | 'BAU' | 'DIG' | 'OA1'
  | 'OA2' | 'MIC' | 'AWS' | 'BEA'
  | 'HWK' | 'AKA' | 'ATL' | 'NET'
  | 'NAU' | 'QUE' | 'HDR' | 'DOC'
  // Result keys
  | 'RES' | 'HEA' | 'COO' | 'TLI'
  | 'CON' | 'RAW' 

  
