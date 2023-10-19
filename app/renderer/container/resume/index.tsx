import React from 'react';
import './index.less';
import fileAction from '@src/common/utils/file';
import { getAppPath } from '@src/common/utils/appPath';

function Resume() {
  getAppPath().then((rootPath: string) => {
    console.log('应用程序的目录路劲为：', rootPath);
    console.log('文件读取，内容数据为：');
    fileAction.read(`${rootPath}/app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(data);
    });
  });
  return <div>我是简历模板</div>;
}

export default Resume;
