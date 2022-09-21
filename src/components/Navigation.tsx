import NavLinks from './NavLinks';

import styles from './Navigation.module.css';

const Navigation: React.FC<{ isMobileOpen: boolean, isFeaturesOpen: boolean, isCompanyOpen: boolean, setIsMobileOpen: Function, setIsFeaturesOpen: Function, setIsCompanyOpen: Function }> = (props) => {
  return (
    <nav className={styles.navigation}>
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

export default Navigation;