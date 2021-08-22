import React from 'react';
import classNames from 'classnames/bind';
import styles from "./Step.module.scss"
import Button from "../Button"


const RecieverStep = ({title,handlePrevious,handleNext, setInputValue, state, errors, setState, setErrors}) => {
  let cx = classNames.bind(styles);

  const changeHandler=(name,value)=>{
    setState({
      ...state,
      to:{
        ...state.to,
        [name]:value
      }
    }
    )
    // setErrors({
    //   ...errors,
    //   to:{
    //     ...errors.to,
    //     [name]:null
    //   }
    // }
    // )
  }

  return (
    <div className={cx('step')}>
      <div className={cx('step-title')}>{title}</div>
      <div className={cx('step-form')}>
        <div className={cx('form-field')}>
          <label htmlFor="name" className={cx('label')}>Name:</label>
          <input type="text" id="name" className={cx('input')} onChange={e=>{changeHandler('name',e.target.value)}}/>
        </div>
        <div className={cx('form-field')}>
          <label htmlFor="streetAddress" className={cx('label')}>Street:</label>
          <input type="text" id="streetAddress" className={cx('input')} onChange={e=>{changeHandler('street',e.target.value)}}/>
        </div>
        <div className={cx('form-field','half')}>
          <label htmlFor="city" className={cx('label')}>City:</label>
          <input type="text" id="city" className={cx('input')} onChange={e=>{changeHandler('city',e.target.value)}}/>
        </div>
        <div className={cx('form-field','half')}>
          <label htmlFor="state" className={cx('label')}>State:</label>
          <input type="text" id="state" className={cx('input')} onChange={e=>{changeHandler('state',e.target.value)}}/>
        </div>
        <div className={cx('form-field','half')}>
          <label htmlFor="zip" className={cx('label')}>Zip:</label>
          <input type="text" id="zip" className={cx('input')} onChange={e=>{changeHandler('zip',e.target.value)}}/>
        </div>
      </div>
    <div className={cx('button-container')}>
      <Button text="Previous" theme="secondary" onClick={handlePrevious}/>
      <Button text="Next" theme="primary" onClick={handleNext}/>
    </div>
    </div>
    
  );
}

export default RecieverStep;