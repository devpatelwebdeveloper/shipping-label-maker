import React from 'react';
import classNames from 'classnames/bind';
import styles from "./Step.module.scss"
import Button from "../Button"


const ShippingInfo = ({title,handlePrevious,handleNext, setInputValue, state, errors, setState, setErrors}) => {
  let cx = classNames.bind(styles);

  const changeHandler=(name,value)=>{
    setState({
      ...state,
      [name]:parseFloat(value)
    }
    )
    // setErrors({
    //   ...errors,
    // [name]:null
    // }
    // )
  }

  return (
    <div className={cx('step')}>
      <div className={cx('step-title')}>{title}</div>
      <div className={cx('step-form')}>
        <div className={cx('form-field')}>
          <label htmlFor="shipping" className={cx('label')}>Shipping Option:</label>
          <select id="shipping" defaultValue={state.shippingOption} onChange={e=>{changeHandler('shippingOption',e.target.value)}}>
            <option value="" selected>Select shipping Option</option>
            <option value="1">Ground</option>
            <option value="1.5">Priority</option>
          </select>
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