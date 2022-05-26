
import { useState } from 'react'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';

import {
  Button
} from '..'


const CHECKOUT_TYPE = {
  en: 'EN',
  zh: 'ZH',
}

function ChooseLanguage({ }) {
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkoutLanguage = (language) => {
    i18n.changeLanguage(language);
    setAnchorEl(null);
  }
  return (
    <>
      {/* <Button
        size='sm'
        className={className}
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {CHECKOUT_TYPE[i18n.language]}
      </Button> */}
      <Menu
        id="customized-menu"
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          Object.keys(CHECKOUT_TYPE).map(v =>
            <MenuItem
              key={v}
              onClick={() => checkoutLanguage(v)}
            >{CHECKOUT_TYPE[v]}</MenuItem>
          )
        }
      </Menu>
    </>
  );
}

export default ChooseLanguage