import React from "react";
import styles from "./styles.module.css";
import TimerCard from "../components/TimerCard/TimerCard";

const QuestionScreen = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container1}>
        <div className={styles.gradient}></div>
        <div className={styles.questionBox}>
          <div className={styles.top}>Question 1</div>
          <div className={styles.main}>
            <div className={styles.question}>
              The boy received the visitors in his birthday suit. This means he
              received them
            </div>
            <div className={styles.options}></div>
            <div className={styles.navigation}>
              <button>Back</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <TimerCard />
      </div>
    </div>
  );
};

export default QuestionScreen;
