
import styles from './Main.module.css';

import hero from '../images/image-hero-desktop.png';
import clientDatabiz from '../images/client-databiz.svg';
import clientAudiophile from '../images/client-audiophile.svg';
import clientMeet from '../images/client-meet.svg';
import clientMaker from '../images/client-maker.svg';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>Make <span>remote work</span></h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals,
          and watch productivity soar.
        </p>

        <button className={styles.learnMoreBTN}>Learn more</button>

        <div className={styles.clients}>
          <img src={clientDatabiz} alt="Databiz" />
          <img src={clientAudiophile} alt="Audiophile" />
          <img src={clientMeet} alt="Meet" />
          <img src={clientMaker} alt="Maker" />
        </div>

      </div>

      <div className={styles.image}>
        {/* <img src={hero} alt="design" className={styles.heroImage} /> */}
      </div>
    </div>
  )
}

export default Main;