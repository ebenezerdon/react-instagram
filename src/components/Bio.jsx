import profileIcon from '../assets/profileIcon.svg'

const Bio = () => {
  const editForm = (
    <form className="edit-bio-form">
      <input type="text" id="" placeholder="Your name" />
      <input type="text" id="" placeholder="About you" />
      <br />
      <button type="button" className="cancel-button">
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  )

  return (
    <section className="bio">
      <div className="profile-photo">
        <img src={profileIcon} alt="profile" />
      </div>
      <div className="profile-info">
        <p className="name">Ebenezer Don</p>
        <p className="about">Building Newdev.io - Learn to code and connect with the best minds.</p>
        <button>Edit</button>
        {editForm}
      </div>
    </section>
  )
}

export default Bio
