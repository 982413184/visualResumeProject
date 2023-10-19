import React, { useEffect } from 'react';
import './index.less';
import Logo from '@assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { shell } from 'electron';
import { ROUTER_ENTRY } from '@src/common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils';
import { useSelector, useDispatch } from 'react-redux';

function Root() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appName = useSelector((state: any) => state.globalModel.appName);
  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      navigate(router.url);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      console.log('3s 后修改...');
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: 'appName',
          values: 'visResumeMook',
        },
      });
    }, 3000);
  }, []);

  useEffect(() => {
    console.log('appName = ', appName);
  }, [appName]);

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="logo" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">小阿姜的模板简历制作平台，让你的简历更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
