import React,{useState} from 'react';
import classNames from 'classnames/bind';
import styles from "./Step.module.scss"
import Button from "../Button"

const ReviewInfo = ({title,info,handlePrevious,handleSubmit}) => {
  let cx = classNames.bind(styles);
  
  const shippingRate=0.40
  const total = (shippingRate* info.weight * info.shippingOption).toFixed(2);
  return (
    <div className={cx('step')}>
      <div className={cx('step-title')}>{title}</div>
      <div className={cx('address-review')}>
 {/* FROM */}
 <div>
        <div className={cx('subtitle')}>From:</div>
        {
          Object.keys(info.from).map((key, index)=> {
            return(
              <div key={index}>
                <span className={cx('package-review-label')}>{key}: </span><span className={cx('package-review-value')}>{info.from[key]}</span>
              </div>
            )
          })
        }
      </div>
      {/* TO */}
      <div>
        <div className={cx('subtitle')}>To:</div>
        {
          Object.keys(info.to).map((key, index)=> {
            return(
              <div key={index}>
                <span className={cx('package-review-label')}>{key}: </span><span className={cx('package-review-value')}>{info.to[key]}</span>
              </div>
            )
          })
        }
      </div>
      </div>
     
     {/* Package Info */}
     <div className={cx('package-info-review')}>
       <div className={cx('package-review-detail')}>
         <div>
           <span className={cx('package-review-label')}>Weight: </span><span className={cx('package-review-value')}>{info.weight} lb</span>
          </div>
         <div>
           <span className={cx('package-review-label')}>Shipping option: </span><span className={cx('package-review-value')}>{info.shippingOption===1?'Ground':'Priority'}</span>
           </div>
       </div>
       <div className={cx('total-review')}>
        <span className={cx('total-review-label')}>Total</span>
        <span className={cx('total-review-amount')}> ${total}</span>
       </div>
     </div>
      {/*<pre> {JSON.stringify(info, null, 2) }</pre>*/}
    <div className={cx('button-container')}>
      <Button text="Previous" theme="secondary" onClick={handlePrevious}/>
      <Button text="Print" theme="primary" onClick={handleSubmit}/>
    </div>
    </div>
    
  );
}

export default ReviewInfo;