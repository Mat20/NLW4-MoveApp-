import { useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { minutes, 
    second, 
    hashFinished, 
    isActive, 
    resetCountDown, 
    startCountDown 
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(second).padStart(2, '0').split(''); 

  return (
    <div>
    <div className={styles.countDownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>

     { hashFinished ? ( 
       <button
         disabled
         className={styles.startCountDownButton}
       >
        Ciclo encerrado
       </button>
     ) : (
       <>
      { isActive ? ( 
        <button 
        type="button" 
        className={`${styles.startCountDownButton} ${styles.startCountDownButtonActive}`}
        onClick={resetCountDown}
        >
          Abandonar ciclo
        </button>
      ) : ( 
        <button 
        type="button" 
        className={styles.startCountDownButton}
        onClick={startCountDown}
        >
         Iniciar um ciclo
        </button>
      )}
      </>
     )}
   </div>
  );
}

