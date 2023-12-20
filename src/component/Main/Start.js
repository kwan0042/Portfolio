import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Start() {
  const [opacity30, setOpacity30] = useState(false);
  const [visible, setVisible] = useState(true);

  const logo_classes = classNames("_t1", {
    opacity_2: opacity30,
    opacity_3: !opacity30,
  });
  const text_classes = classNames("_t1", "mx-2", {
    opacity_1: opacity30,
    opacity_3: !opacity30,
  });
  const text_classes2 = classNames("_t2", "mx-2", {
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
    }, 2000);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  return visible ? (
    <div className={EnterView}>
      <div className={logo_classes}>
        <img
          src="%PUBLIC_URL%/../img/DKLogo_B.png"
          width={"200px"}
          alt="DK Logo"
        />
      </div>
      <div className="box">
        <div className={text_classes}>Daniel Kwan</div>
        <div className={text_classes2}>Portfolio</div>
      </div>
    </div>
  ) : (
    <></>
  );
}
