import { FC } from 'react'
import * as Lib from '.'
import { Icon } from '../../../../../../@attorn-react-components/src';


export const MenuItem: FC<Lib.T.MenuItemProps> = ({
  title, children
}): JSX.Element => {

  return (
    <Lib.S.MenuItem hasChildren={typeof children !== 'undefined'}>
      <p tabIndex={1}>
        <span>{title}</span>
        {children &&
          <Icon name='chevron-down' color='black' size={15} />
        }
      </p>

      {children &&
        <div className='children'>
          {children}
        </div>
      }
    </Lib.S.MenuItem>
  )
}
