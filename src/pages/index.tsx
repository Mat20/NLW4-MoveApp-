import Head from  'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountDownProvider } from '../contexts/CountDownContext';

import style from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props)
  
  return (
      <ChallengesProvider 
         level={props.level}
         currentExperience={props.currentExperience}
         challengesCompleted={props.challengesCompleted}
      >
    <div className={style.container}>
      <Head>
        <title>Início | MoveApp</title>
      </Head>
      <ExperienceBar />
      
      <CountDownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      </CountDownProvider>
    </div>
  </ChallengesProvider>
  );
}

/**
 * Back-end (Ruby)
 * Next.js (Node.js)
 * Front-end (React)
 */
// Post (titulo, descrição)
export const getServerSideProps: GetServerSideProps = async(ctx) => {
  const { level, currentExperience, challengesCompleted  } = ctx.req.cookies;  
 
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}