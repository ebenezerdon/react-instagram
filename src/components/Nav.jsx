import instagramLogo from '../assets/instagram.png'

const Nav = () => {
  return (
    <nav>
      <button className="logo">
        <img src={instagramLogo} alt="logo" />
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
