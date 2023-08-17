import NavbarMenuItem from "./NavbarMenuItem"

function NavbarMenu() {
  const styles = {
    ul: {
      padding: '0',
      listStyle: 'none',
      display: 'flex',
    },
  }

  return (
    <ul style={styles.ul}>
      <NavbarMenuItem
        link='#'
        text='Beranda'
      />
      <NavbarMenuItem
        link='#'
        text='Bantuan'
      />
    </ul>
  )
}

export default NavbarMenu
