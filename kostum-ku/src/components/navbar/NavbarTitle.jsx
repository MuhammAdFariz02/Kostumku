import kostumKuLogo from '../../assets/icons/kostumku.svg'

function NavbarTitle() {
  const styles = {
    section: {
      display: 'flex',
      padding: '0',
    },
    img: {
      maxWidth: '36px',
    },
    h4: {
      padding: '0'
    },
  }

  return (
    <section style={styles.section} >
      <img
        src={kostumKuLogo}
        alt='KostumKu logo'
        style={styles.img}
      />
      <h4 style={styles.h4} >KostumKu.</h4>
    </section>
  )
}

export default NavbarTitle
