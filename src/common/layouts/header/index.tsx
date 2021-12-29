// MIT License
//
// Copyright (c) 2021 Attorn Studio by qafoori
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


import { FC } from 'react';
import * as Lib from './lib';
import { Icon } from '../../../../../attorn-react-components/src';
import { useTranslation } from 'react-i18next';
import P from '../../../assets/images/profile.png'


export const Header: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Lib.S.HeaderContainer>
      <div className='left'>
        <Icon name="white-back-logo" size={34} className="logo" />

        <Lib.C.MenuItem title={t('header.menu.dashboard')} />

        <Lib.C.MenuItem title={t('header.menu.spaces')}>
          something
        </Lib.C.MenuItem>

        <Lib.C.MenuItem title={t('header.menu.settings')} />
        <Lib.C.MenuItem title={t('header.menu.help')} />
        <Lib.C.MenuItem title={t('header.menu.store')} special={true} style={{ marginLeft: 10 }} />

        <Lib.S.SearchBox className='searchBox'>
          <p>{t('header.search')}</p>
          <Icon name='search' color='var(--foreground_color)' size={15} />
        </Lib.S.SearchBox>
      </div>

      <div className='right'>
        <Lib.S.StatusesBox>
          <div className='profile'>
            <img src={P} />
            <Icon name='chevron-down' color='var(--foreground_color)' size={15} />
          </div>

          <div className='sync'>
            <Icon name='sync' color='var(--accent_80)' secondaryColor='var(--foreground)' size={25} />
          </div>

          <div className='upgrade'>
            <span>{t('header.upgrade')}</span>
            <Icon name='chevron-down' color='var(--foreground_color)' size={15} />
          </div>
        </Lib.S.StatusesBox>
      </div>
    </Lib.S.HeaderContainer>
  )
}
