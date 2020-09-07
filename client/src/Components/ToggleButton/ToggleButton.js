import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function ToggleButton({ cardView, setCardView }) {
  return (
    <BootstrapSwitchButton
        checked={cardView}
        onlabel='Card'
        offlabel='List'
        width={75}
        onChange={(checked) => { setCardView(checked); }}
    />
  )
}

export default ToggleButton;
