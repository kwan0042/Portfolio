import { useEffect } from "react";
import React, { useState } from "react";
import classNames from "classnames";

export default function Start() {
  const [opacity30, setOpacity30] = useState(false);
  const [visible, setVisible] = useState(true);

  const logo_classes = classNames("_t1", {
    opacity_1: opacity30,
    opacity_3: !opacity30,
  });
  const logo_classes2 = classNames("_t2", {
    opacity_2: opacity30,
    opacity_3: !opacity30,
  });
  const EnterView = classNames("EnterView", {
    opacity_4: !opacity30,
  });

  useEffect(() => {
    setOpacity30(true);
    setTimeout(() => {
      setOpacity30(false);
    }, 3000);
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, [setOpacity30]);

  return visible ? (
    <>
      <div className={EnterView}>
        <div className={logo_classes}>Daniel Kwan</div>
        <div className={logo_classes2}>Portfolio</div>
      </div>
    </>
  ) : (
    <></>
  );
}
