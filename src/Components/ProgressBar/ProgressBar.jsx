import React from 'react';
import classNames from 'classnames/bind'
import styles from "./ProgressBar.module.scss"

const ProgressBar = ({steps}) => {
  let cx = classNames.bind(styles)
  return (
    <div className={cx('custom-container')}>
    <ul className={cx('steps-bar')}>
      {steps.map(step => {
        return (
          <li
            id={step.stepId}
            key={step.stepId}
            className={cx('step-item',step.stepSuccess)}
            step-name={step.stepName}
          >
            <div>
              <span className={cx('stepIcon')}>{step.stepIcon}</span>
            </div>
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default ProgressBar;
