import getPhotoUrl from 'get-photo-url'
import { useState } from 'react'

const Gallery = () => {
  const [allPhotos, setAllPhotos] = useState([])

  const addPhoto = async () => {
    const newPhoto = {
      id: Date.now(),
      url: await getPhotoUrl('#addPhotoInput'),
    }

    setAllPhotos([newPhoto, ...allPhotos])
  }

  const removePhoto = (id) => {
    setAllPhotos(allPhotos.filter((photo) => photo.id !== id))
  }

  return (
    <>
      <input type="file" accept="image/*" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <i className="add-photo-button fas fa-plus-square" />
      </label>

      <section className="gallery">
        {allPhotos.map((photo) => (
          <div className="item" key={photo.id}>
            <img src={photo.url} className="item-image" alt="" />
            <button className="delete-button" onClick={() => removePhoto(photo.id)}>
              Delete
            </button>
          </div>
        ))}
      </section>
    </>
  )
}

export default Gallery
