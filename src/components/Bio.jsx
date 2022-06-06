import getPhotoUrl from 'get-photo-url'
import { useEffect, useState } from 'react'
import profileIcon from '../assets/profileIcon.svg'
import { db } from '../data'

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Ebenezer Don',
    about: 'Building Newdev.io - Learn to code and connect with the best minds.',
  })
  const [editFormIsOpen, setEditFormIsOpen] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState(profileIcon)

  useEffect(() => {
    const setDataFromDb = async () => {
      setUserDetails(await db.bio.get('info'))
      setProfilePhoto(await db.bio.get('profilePhoto'))
    }

    setDataFromDb()
  }, [])

  const updateUserDetails = async (event) => {
    event.preventDefault()
    const objectData = {
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    }

    setUserDetails(objectData)
    await db.bio.put(objectData, 'info')
    // setEditFormIsOpen(false)
  }

  const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
    setProfilePhoto(newProfilePhoto)
    await db.bio.put(newProfilePhoto, 'profilePhoto')
  }

  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input type="text" id="" name="nameOfUser" defaultValue={userDetails.name} placeholder="Your name" required />
      <input type="text" id="" name="aboutUser" defaultValue={userDetails.about} placeholder="About you" required />
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
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>

        {editFormIsOpen ? editForm : editButton}
      </div>
    </section>
  )
}

export default Bio
