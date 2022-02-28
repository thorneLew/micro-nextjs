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
            name: 'sub-react',
            entry: 'http://www.micro.com',
            container: '#root',
            activeRule: '/react',
          },
          {
            name: 'sub-react1',
            entry: '//127.0.0.1:9002',
            container: '#root',
            activeRule: '/react1',
          },
        ],
      );

      start();
    }
  }, []);

  return (
    <OSBasePage>
      <div id="root"/>
    </OSBasePage>
  );
};

export default Micro;
