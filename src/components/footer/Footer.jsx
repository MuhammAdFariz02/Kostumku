function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>© {currentYear} KostumKu.</p>
    </footer>
  )
}

export default Footer
