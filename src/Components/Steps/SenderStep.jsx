import React,{useState} from 'react';
import classNames from 'classnames/bind';
import styles from "./Step.module.scss"
import { stateList } from './State';
import Button from "../Button"


const SenderStep = ({title,handleNext, state, errors, setState, setErrors}) => {

  let cx = classNames.bind(styles);
  const changeHandler=(name,value)=>{
    setState({
      ...state,
      from:{
        ...state.from,
        [name]:value
      }
    }
    )
    // setErrors({
    //   ...errors,
    //   from:{
    //     ...errors.from,
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
          <input type="text" id="name" className={cx('input')} value={state.from.name}  onChange={e=>{changeHandler('name',e.target.value)}}/>
        </div>
        <div className={cx('form-field')}>
          <label htmlFor="streetAddress" className={cx('label')}>Street:</label>
          <input type="text" id="streetAddress" className={cx('input')}value={state.from.street} onChange={e=>{changeHandler('street',e.target.value)}}/>
        </div>
        <div className={cx('form-field','half')}>
          <label htmlFor="city" className={cx('label')}>City:</label>
          <input type="text" id="city" className={cx('input')} value={state.from.city} onChange={e=>{changeHandler('city',e.target.value)}}/>
        </div>
        <div className={cx('form-field','half')}>
          <label htmlFor="state" className={cx('label')}>State:</label>
          <select id="state" className={cx('input')} defaultValue={state.from.state} onChange={e=>{changeHandler('state',e.target.value)}}>
            <option value="" defaultValue>Select State</option>
            {stateList.map((st,index)=>{
              return(
                <option value={st} key={index}>{st}</option>    
              )
            })}            
          </select>
        </div>
        <div className={cx('form-field','half')}>
          <label htmlFor="zip" className={cx('label')}>Zip:</label>
          <input type="text" id="zip" className={cx('input')} value={state.from.zip} onChange={e=>{changeHandler('zip',e.target.value)}}/>
        </div>
      </div>
    <div className={cx('button-container')}>
      <Button text="Next" theme="primary" onClick={handleNext}/>
    </div>
    </div>
    
  );
}

export default SenderStep;