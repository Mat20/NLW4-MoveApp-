import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountDownContext);


  function handleChallengeSucceeded() {
     completeChallenge();
     resetCountDown();
  }

  function handleChallengeFailed() {
     resetChallenge();
     resetCountDown();
  }

  //const hashActiveChallenge = true; variavel de teste
   return (
     <div className={styles.challengeBoxContainer}>
       { activeChallenge ? ( 
        <div className={styles.challengeActive}>
          <header>Ganher {activeChallenge.amount} XP</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
              >
                Falhei
            </button>
            <button 
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
       ) : ( 
         <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios, a serem completados.</strong>
         <p>
           <img src="icons/level-up.svg" alt="Level Up"/>
           Complete-os e ganhe experiência e avance de leve.
         </p>
       </div>
        ) }
      </div>
   );
}

