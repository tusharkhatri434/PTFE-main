import React from 'react';

const WhatsAppButton = ({w="30px",h="30px"}) => {
  const phoneNumber = '919557074015';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  function clickHandler(){
     window.open(whatsappLink, "_blank");
  }

  return (
    <button onClick={clickHandler}>
      <img
        src="/lovable-uploads/img/whatsapp.png"
        alt="WhatsApp"
        style={{
          width: w,
          height: h,
          cursor: 'pointer',
        }}
      />
    </button>
  );
};

export default WhatsAppButton;
