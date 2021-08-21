import React from 'react';
import SenderStep from './Steps/SenderStep';
import RecieverStep from './Steps/RecieverStep';

const ShippingForm = () => {
  return (
    <div>
      <SenderStep title="Enter the Sender's address"/>
      <RecieverStep title="Enter the Test's address"/>
    </div>
  );
}

export default ShippingForm;
