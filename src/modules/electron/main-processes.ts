import { App } from 'electron'
import { sideBarMainProcess } from '../../common/layouts/sidebar/lib/main';
import { AppsLayoutMainProcess } from '../../common/layouts/apps-layout/lib/main';

export const MainProcesses = (app: App) => {
  sideBarMainProcess(app);
  AppsLayoutMainProcess(app)
}
