import React from 'react';
import classNames from 'classnames/bind';
import styles from "../Step.module.scss"
import Button from "../../Button"


const ShippingInfo = ({title,handlePrevious,handleNext, setInputValue, state, errors, setState, setErrors}) => {
  let cx = classNames.bind(styles);


  return (
    <div className={cx('step')}>
      <div className={cx('step-title')}>{title}</div>
      <div className={cx('step-form')}>
        <div className={cx('form-field')}>
          <label htmlFor="name" className={cx('label')}>Name:</label>
          <input type="text" id="name" className={cx('input')}/>
        </div>
      
      </div>
    <div className={cx('button-container')}>
      <Button text="Previous" theme="secondary" onClick={handlePrevious}/>
      <Button text="Next" theme="primary" onClick={handleNext}/>
    </div>
    </div>
    
  );
}

export default ShippingInfo;