import { App } from 'electron'
import { sideBarMainProcess } from '../../common/layouts/sidebar/lib/main';

export const MainProcesses = (app: App) => {
  sideBarMainProcess(app);
}
