import React from 'react';
import './index.less';

interface IProps {
  /**
   * @description 标题
   */
  text: string;
}

function Title({ text }: IProps) {
  return <div styleName="title">{text}</div>;
}

export default Title;
