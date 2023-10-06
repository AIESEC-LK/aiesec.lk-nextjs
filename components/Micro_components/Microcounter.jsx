'use Client'
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CountUpComponent = ({ end }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const startCountUp = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      setCount(end);
    }
  }, [isVisible, end]);

  return (
    <VisibilitySensor onChange={startCountUp} delayedCall>
      <CountUp end={count} />
    </VisibilitySensor>
  );
};

export default CountUpComponent;