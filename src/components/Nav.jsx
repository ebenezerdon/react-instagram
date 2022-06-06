const Nav = () => {
  return (
    <nav>
      <button className="logo">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
      </button>
      <input type="text" className="search" placeholder="Search" />
      <span className="nav-links">
        <button>
          <i className="fas fa-home" />
        </button>
        <button>
          <i className="far fa-comment-alt" />
        </button>
        <button>
          <i className="far fa-compass" />
        </button>
        <button>
          <i className="far fa-heart" />
        </button>
      </span>
    </nav>
  )
}

export default Nav
