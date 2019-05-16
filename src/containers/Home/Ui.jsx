import React from 'react';
import LeftMenuUi from '../../components/LeftMenu/Ui';
import { hasLoggedIn } from '../../utils/utils';
const HomeUi = () => (
  <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
    <div> {hasLoggedIn() && <LeftMenuUi />} </div> <div>Home</div>
  </div>
);

export default HomeUi;

// ToDo: Implement container with loader
