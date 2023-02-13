function Nav() {
	return (
		<div>

			<nav className='demo'>
				<a href='#' className='brand'>
					<img className='logo' src='https://t3.ftcdn.net/jpg/02/36/03/66/360_F_236036622_ctUjaJTkIANvk9pJh0s5ZJRDWbM8ggT9.jpg' />
					<span>Picnic CSS</span>
				</a>

				<input id='bmenub' type='checkbox' className='show' />
				<label htmlFor='bmenub' className='burger pseudo button'>menu</label>

				<div className='menu'>
					<a href='#' className='pseudo button icon-picture'>Demo</a>
					<a href='#' className='button icon-puzzle'>Plugins</a>
				</div>
			</nav>

		</div>
	);
}

export default Nav;
