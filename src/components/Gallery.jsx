import pexels1 from '../assets/pexels1.jpeg'
import pexels2 from '../assets/pexels2.jpeg'
import pexels3 from '../assets/pexels3.jpeg'
import pexels4 from '../assets/pexels4.jpeg'
import pexels5 from '../assets/pexels5.jpeg'

const Gallery = () => {
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <i className="add-photo-button fas fa-plus-square" />
      </label>

      <section className="gallery">
        <div className="item">
          <img src={pexels1} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>

        <div className="item">
          <img src={pexels2} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>

        <div className="item">
          <img src={pexels3} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>

        <div className="item">
          <img src={pexels4} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>

        <div className="item">
          <img src={pexels5} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
      </section>
    </>
  )
}

export default Gallery
