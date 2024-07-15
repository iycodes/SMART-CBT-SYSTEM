import React, { RefObject, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import clock from "../../assets/icons/clock.svg";
import colon from "../../assets/icons/colon.svg";

const TimerCard = () => {
  const sec_zeroRef = useRef<HTMLSpanElement>(null);
  const min_zeroRef = useRef<HTMLSpanElement>(null);
  const hr_zeroRef = useRef<HTMLSpanElement>(null);
  const [hr, setHr] = useState<number>(1);
  const [min, SetMin] = useState<number>(6);
  const [sec, setSec] = useState<number>(6);

  const [isHrZero, setIsHrZero] = useState<boolean>(false);

  function updateTime() {
    setInterval(() => {
      //   if (sec == 0) {
      //     setSec(60);
      //     // SetMin((prev) => prev - 1);
      //   }
      //   if (min == 0) {
      //     setHr((prev) => prev - 1);
      //   }
      setSec((prev) => prev - 1);
    }, 1000);
  }

  useEffect(() => {
    updateTime();
  }, []);

  useEffect(() => {
    isSingleDigit(sec_zeroRef, sec);
    isSingleDigit(min_zeroRef, min);
    isSingleDigit(hr_zeroRef, hr);
    if (sec == 0) {
      setSec(59);
      SetMin((prev) => prev - 1);
    }
    if (min == 0) {
      setHr((prev) => prev - 1);
    }
  }, [sec]);

  function isSingleDigit(ref: React.RefObject<HTMLSpanElement>, num: number) {
    if (num < 10) {
      console.log("number is less than 10");
      if (ref.current !== null) {
        console.log("ref value is ", ref.current);
        ref.current.style.display = "inline";
      }
    } else {
      if (ref.current !== null) {
        console.log("number is greater than 10");
        ref.current.style.display = "none";
      }
    }
  }

  return (
    <div className={styles.layout}>
      <div className={styles.top}>
        <img src={clock} alt="" width={20} />
        <span>TIME LEFT</span>
      </div>
      <div className={styles.timer}>
        <span>
          {" "}
          <span ref={hr_zeroRef}>0</span> {hr}
        </span>
        <img src={colon} height={60} alt="" />
        <span>
          {" "}
          <span ref={min_zeroRef}>0</span> {min}
        </span>
        <img src={colon} height={60} alt="" />
        <span>
          {" "}
          <span ref={sec_zeroRef}>0</span> {sec}
        </span>
      </div>
      <div className={styles.cancel}></div>
    </div>
  );
};

export default TimerCard;
