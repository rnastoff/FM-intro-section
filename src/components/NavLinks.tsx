
import styles from './NavLinks.module.css';

import snapLogo from '../images/logo.svg';
import arrowDown from '../images/icon-arrow-down.svg';
import iconTodo from '../images/icon-todo.svg';
import iconCalendar from '../images/icon-calendar.svg';
import iconReminders from '../images/icon-reminders.svg';
import iconPlanning from '../images/icon-planning.svg';

import menuHamburger from '../images/icon-menu.svg';
import menuClose from '../images/icon-close-menu.svg';


// interface mobileNavInterface {
//   isMobileOpen: boolean,
//   isFeaturesOpen: boolean,
//   isCompanyOpen: boolean,
//   setIsMobileOpen: Function,
//   setIsFeaturesOpen: Function,
//   setIsCompanyOpen: Function
// }



// const NavLinks: React.FC<{ mobileNav: {} }> = (props) => {

const NavLinks: React.FC<{ isMobileOpen: boolean, isFeaturesOpen: boolean, isCompanyOpen: boolean, setIsMobileOpen: Function, setIsFeaturesOpen: Function, setIsCompanyOpen: Function }> = (props) => {

  console.log(props.isMobileOpen);

  return (
    <div className={styles.navGroup}>

      <div className={styles.mobileHeader}>
        <img src={snapLogo} alt="snap logo" />
        <img
          src={menuHamburger}
          alt="menu"
          className={styles.menuHamburger}
          onClick={() => props.setIsMobileOpen(true)}
        />
      </div>

      {props.isMobileOpen &&
        <div className={styles.nav}>
          <div className={styles.menuClose}>
            <img
              src={menuClose}
              alt="Close Menu"
              onClick={() => props.setIsMobileOpen(false)}
            />
          </div>

          <div className={styles.navLeft}>
            <img className={styles.snapLogo} src={snapLogo} alt="snap logo" />

            <ul>
              <li
                className={`${styles.topLevel} ${styles.features}`}
                onClick={() => props.setIsFeaturesOpen(!props.isFeaturesOpen)}
              >
                <a href="#" >Features<img src={arrowDown} alt="arrow" className={styles.arrow} /></a>

                {props.isFeaturesOpen &&
                  <ul className={styles.featuresDropdown}>
                    <li><a href="#"><img src={iconTodo} alt="todo" className={styles.icons} />Todo List</a></li>
                    <li><a href="#"><img src={iconCalendar} alt="calendar" className={styles.icons} />Calendar</a></li>
                    <li><a href="#"><img src={iconReminders} alt="reminders" className={styles.icons} />Reminders</a></li>
                    <li><a href="#"><img src={iconPlanning} alt="planning" className={styles.icons} />Planning</a></li>

                  </ul>
                }
              </li>

              <li
                className={`${styles.topLevel} ${styles.company}`}
                onClick={() => props.setIsCompanyOpen(!props.isCompanyOpen)}
              >
                <a href="#">Company<img src={arrowDown} alt="arrow" className={styles.arrow} /></a>

                {props.isCompanyOpen &&
                  <ul className={styles.companyDropdown}>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                }
              </li>

              <li className={styles.topLevel}><a href="#">Careers</a></li>
              <li className={styles.topLevel}><a href="#">About</a></li>

            </ul>

          </div>

          <div className={styles.navRight}>
            <button className={styles.loginBTN}>Login</button>
            <button className={styles.registerBTN}>Register</button>
          </div>
        </div>
      }

    </div>

  )
}

export default NavLinks;