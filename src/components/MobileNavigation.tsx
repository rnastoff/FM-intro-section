import NavLinks from './NavLinks';

import styles from './MobileNavigation.module.css';


const MobileNavigation: React.FC<{ isMobileOpen: boolean, isFeaturesOpen: boolean, isCompanyOpen: boolean, setIsMobileOpen: Function, setIsFeaturesOpen: Function, setIsCompanyOpen: Function }> = (props) => {
  return (
    <nav className={styles.mobileNavigation}>
      <NavLinks
        isMobileOpen={props.isMobileOpen}
        isFeaturesOpen={props.isFeaturesOpen}
        isCompanyOpen={props.isCompanyOpen}
        setIsMobileOpen={props.setIsMobileOpen}
        setIsFeaturesOpen={props.setIsFeaturesOpen}
        setIsCompanyOpen={props.setIsCompanyOpen}
      />
    </nav>
  )
}

export default MobileNavigation;