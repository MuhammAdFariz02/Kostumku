import { PropTypes } from 'prop-types'

function NavbarMenuItem({
  link = '#',
  text = 'No Text',
}) {
  const styles = {
    li: {
      margin: '0',
    },
  }

  return (
    <li style={styles.li}>
      <a href={link}>{ text }</a>
    </li>
  )
}

NavbarMenuItem.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
}

export default NavbarMenuItem
