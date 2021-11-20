import { FC } from 'react'
import * as Lib from '.'
import { Icon } from '../../../../../../@attorn-react-components/src'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

export const SidebarButton: FC<Lib.T.Button> = ({
  name, onClick, title, active
}): JSX.Element => {

  return (
    <Lib.S.SidebarButton onClick={onClick} active={active}>
      <div>
        <Icon name={name} color={active ? 'var(--accent)' : 'var(--foreground_color)'} />
      </div>
      <span>{title}</span>
    </Lib.S.SidebarButton>
  )
}
