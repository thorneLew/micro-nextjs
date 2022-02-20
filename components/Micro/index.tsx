import React, {useEffect} from 'react';
import OSBasePage from '../BasePage/OSBasePage';

const Micro = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const {
        registerMicroApps,
        start,
      } = require('qiankun');

      registerMicroApps(
        [
          {
            name: 'react',
            entry: '//localhost:3001',
            container: '#root',
            activeRule: '/react',
          },
        ],
      );

      start();
    }
  }, []);

  return (
    <OSBasePage>
      <div id="root" />
    </OSBasePage>
  );
};

export default Micro;
