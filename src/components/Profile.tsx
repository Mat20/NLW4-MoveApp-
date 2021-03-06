import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext); 

  return (
    <div className={styles.profileContainer} >
      <img src="https://github.com/mat20.png" alt="Matheus Souza Monteiro"/>
      <div>
        <strong>Matheus Souza Monteiro</strong>
        <p>
          <img src="icons/level.svg" alt="Nivel de Level"/>
          {level}
        </p>
      </div>
    </div>
  );
}

