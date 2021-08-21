import React from 'react';
import classNames from 'classnames/bind';
import styles from "./Button.module.scss"

const Button = ({text,onClick,theme}) => {
  let cx = classNames.bind(styles);
  return (
    <button onClick={onClick} className={cx('btn',theme?theme:'btn-primary')}>
      <span className={cx('btn-text')}>{text}</span>
    </button>
  );
}

export default Button;
