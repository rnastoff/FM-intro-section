import { useState } from 'react';

import styles from './IntroSection.module.css';

import NavBar from './NavBar';
import Main from './Main';


const IntroSection = () => {

  let [isMobileOpen, setIsMobileOpen] = useState(false);
  let [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  let [isCompanyOpen, setIsCompanyOpen] = useState(false);

  let mobileNav = {
    isMobileOpen,
    isFeaturesOpen,
    isCompanyOpen,
    setIsMobileOpen: setIsMobileOpen,
    setIsFeaturesOpen,
    setIsCompanyOpen
  };

  return (
    <>
      {isMobileOpen && <div className={styles.blackOverlay}></div>}
      <div className={styles.container}>
        <NavBar
          isMobileOpen={isMobileOpen}
          isFeaturesOpen={isFeaturesOpen}
          isCompanyOpen={isCompanyOpen}
          setIsMobileOpen={setIsMobileOpen}
          setIsFeaturesOpen={setIsFeaturesOpen}
          setIsCompanyOpen={setIsCompanyOpen}
        />
        <Main />
      </div>
    </>
  )
}

export default IntroSection;