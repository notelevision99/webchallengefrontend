import React, { useState, useEffect } from "react";

function ScrollTopTop({ showBelow }) {
  const [show, setShow] = useState(showBelow ? false : true);

  const onScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const onClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, onScroll);
      return () => window.removeEventListener(`scroll`, onScroll);
    }
  });

  return (
    <div
      className={show ? "scroll-totop active" : "scroll-totop"}
      onClick={onClick}
    >
      <p>&laquo;</p>
    </div>
  );
}

export default ScrollTopTop;
