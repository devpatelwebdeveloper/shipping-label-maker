import React from 'react';
import classNames from 'classnames/bind';
import styles from "./Step.module.scss"
import Button from "../Button"


const PackageInfo = ({title,handlePrevious,handleNext, setInputValue, state, errors, setState, setErrors}) => {
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
          <label htmlFor="name" className={cx('label')}>Name:</label>
          <input type="text" id="name" className={cx('input')} onChange={e=>{changeHandler('weight',e.target.value)}}/>
        </div>
      
      </div>
    <div className={cx('button-container')}>
      <Button text="Previous" theme="secondary" onClick={handlePrevious}/>
      <Button text="Next" theme="primary" onClick={handleNext}/>
    </div>
    </div>
    
  );
}

export default PackageInfo;