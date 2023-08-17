import NavbarMenu from './NavbarMenu'
import NavbarTitle from './NavbarTitle'

function Navbar() {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }

  return (
    <nav style={styles.nav}>
      <NavbarTitle />
      <NavbarMenu />
    </nav>
  )
}

export default Navbar
