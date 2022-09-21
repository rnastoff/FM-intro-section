import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

const NavBar: React.FC<{ isMobileOpen: boolean, isFeaturesOpen: boolean, isCompanyOpen: boolean, setIsMobileOpen: Function, setIsFeaturesOpen: Function, setIsCompanyOpen: Function }> = (props) => {

  let nav = {
    isMobileOpen: true,
    isFeaturesOpen: true,
    isCompanyOpen: true,
    setIsMobileOpen: () => { },
    setIsFeaturesOpen: () => { },
    setIsCompanyOpen: () => { }
  }



  return (
    <div>
      <Navigation
        isMobileOpen={true}
        isFeaturesOpen={true}
        isCompanyOpen={true}
        setIsMobileOpen={() => { }}
        setIsFeaturesOpen={() => { }}
        setIsCompanyOpen={() => { }}

      />
      <MobileNavigation
        isMobileOpen={props.isMobileOpen}
        isFeaturesOpen={props.isFeaturesOpen}
        isCompanyOpen={props.isCompanyOpen}
        setIsMobileOpen={props.setIsMobileOpen}
        setIsFeaturesOpen={props.setIsFeaturesOpen}
        setIsCompanyOpen={props.setIsCompanyOpen}
      />
    </div>
  )
}

export default NavBar;