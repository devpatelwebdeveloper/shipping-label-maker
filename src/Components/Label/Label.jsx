import React from 'react';
import classNames from 'classnames/bind';
import Barcode from "react-barcode";
import {randomId,todaysDate} from "../../Utils"
import styles from "./Label.module.scss";
const Label = ({info}) => {
  let cx = classNames.bind(styles);
  const tracking = `${randomId(2)}-${randomId(3)}-${randomId(3)}-${randomId(2)}-${randomId(4)}-${randomId(4)}`
  return (

    <div className={cx('label')}>
      <div className={cx('from-package-info')}>
        <div className={cx('from-info')}>
          <span>{info.from.name}</span>
          <span>{info.from.street}</span>
          <span>{info.from.city} {info.from.state} {info.from.zip}</span>
          <span>US</span>

        </div>
        <div className={cx('package-info')}>
          <span>SHP WT: <span className={cx('weight')}>{info.weight} LBS</span></span>
          <span>DATE: {todaysDate()}</span>
        </div>
      </div>
      <div className={cx('ship-info')}>
        <span className={cx('ship-label')}>SHIP TO:</span>
        <div className={cx('to-info')}>
          <span>{info.to.name}</span>
          <span>{info.to.street}</span>
          <span className={cx('ship-label')}>{info.to.city} {info.to.state} {info.to.zip}</span>
          <span className={cx('ship-label')}>US</span> 
        </div>
      </div>
      <div className={cx('tracking-barcode')}>
        <span className={cx('shipping-priority')}>Shipping Priority: {info.shippingOption===1? 'Ground':'Priority'}</span>
          <Barcode value={tracking} style={{maxWidth:'600px'}} />
          </div>

    </div>
  );
}

export default Label;
