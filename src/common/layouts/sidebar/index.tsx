import { FC } from 'react'
import * as Lib from './lib'

export const Sidebar: FC = (): JSX.Element => {
  const { I, states, on } = Lib.H.useSidebar();

  return (
    <Lib.S.Sidebar>
      <div className="top">
        {I.TOP_BUTTONS.map((item, index) =>
          states.itemsToShow >= index && (
            <Lib.C.SidebarButton {...item} key={index} />
          )
        )}

        {states.itemsToShow < I.TOP_BUTTONS.length - 1 &&
          <Lib.C.SidebarButton
            name='dots'
            title='More Options'
            onClick={on.showMoreOptions}
          />
        }
      </div>

      <div className="bottom">
        {I.BOTTOM_BUTTONS.map((item, index) =>
          <Lib.C.SidebarButton {...item} key={index} />
        )}
      </div>
    </Lib.S.Sidebar>
  )
}
