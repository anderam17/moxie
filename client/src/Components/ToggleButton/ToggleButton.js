import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function ToggleButton({ cardView, setCardView }) {
  return (
    <BootstrapSwitchButton
        checked={cardView}
        onlabel='List View'
        offlabel='Card View'
        width={100}
        onstyle="warning"
        height={25}
        size={"sm"}
        onChange={(checked) => { setCardView(checked); }}
    />
  )
}

export default ToggleButton;
