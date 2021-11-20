import { IconNames } from "../../../../../../@attorn-react-components/src"

export type Button = {
  name: IconNames;
  title: string;
  onClick: () => void;
  active?: boolean;
  accelerator?: string
}
