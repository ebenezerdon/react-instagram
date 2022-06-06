import getPhotoUrl from 'get-photo-url'
import { useState } from 'react'
import profileIcon from '../assets/profileIcon.svg'

const Bio = () => {
  const [nameOfUser, setNameOfUser] = useState('Ebenezer Don')
  const [aboutUser, setAboutUser] = useState('Building Newdev.io - Learn to code and connect with the best minds.')
  const [editFormIsOpen, setEditFormIsOpen] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState(profileIcon)
  // explain useEffect hook. setFormIsOpen to true by default as an example

  const updateUserDetails = (event) => {
    event.preventDefault()
    setNameOfUser(event.target.nameOfUser.value)
    setAboutUser(event.target.aboutUser.value)
    setEditFormIsOpen(false)
  }

  const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
    setProfilePhoto(newProfilePhoto)
  }

  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input type="text" id="" name="nameOfUser" defaultValue={nameOfUser} placeholder="Your name" required />
      <input type="text" id="" name="aboutUser" defaultValue={aboutUser} placeholder="About you" required />
      <br />
      <button type="button" className="cancel-button" onClick={() => setEditFormIsOpen(false)}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  )

  const editButton = <button onClick={() => setEditFormIsOpen(true)}>Edit</button>

  return (
    <section className="bio">
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
        <div className="profile-photo" role="button" title="Click to edit photo">
          <img src={profilePhoto} alt="profile" />
        </div>
      </label>

      <div className="profile-info">
        <p className="name">{nameOfUser}</p>
        <p className="about">{aboutUser}</p>

        {editFormIsOpen ? editForm : editButton}
      </div>
    </section>
  )
}

export default Bio
