import React from 'react';
import classNames from 'classnames/bind';
import styles from "../Step.module.scss"
import Button from "../../Button"


const ReviewInfo = ({title,info,handlePrevious,handleSubmit}) => {
  let cx = classNames.bind(styles);
  
  const shippingRate=0.40
  
  return (
    <div className={cx('step')}>
      <div className={cx('step-title')}>{title}</div>
      <div>
     <pre> {JSON.stringify(info, null, 2) }</pre>
      </div>
      <div>
        Total: ${info.weight*shippingRate*info.shippingOption}
      </div>
    <div className={cx('button-container')}>
      <Button text="Previous" theme="secondary" onClick={handlePrevious}/>
      <Button text="Print" theme="primary" onClick={handleSubmit}/>
    </div>
    </div>
    
  );
}

export default ReviewInfo;