export interface NavItem {
  nodeId: number;
  parentNode: number;
  description1: string;
  description2: string;
  order: string;
  statusNo: string;
  tipObj: string;
  objData: string;
  icon: string;
  children?: NavItem[];
}
