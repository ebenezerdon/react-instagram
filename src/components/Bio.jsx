import profileIcon from '../assets/profileIcon.svg'

const Bio = () => {
  return (
    <section className="bio">
      <div className="profile-photo">
        <img src={profileIcon} alt="profile" />
      </div>
      <div className="profile-info">
        <p className="name">Ebenezer Don</p>
        <p className="about">Building Newdev.io - Learn to code and connect with the best minds.</p>
        <button>Edit</button>
      </div>
    </section>
  )
}

export default Bio
