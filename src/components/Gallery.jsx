const Gallery = () => {
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <i className="add-photo-button fas fa-plus-square" />
      </label>

      <section className="gallery">
        <div className="item">
          <img src="https://images.pexels.com/photos/4835026/pexels-photo-4835026.jpeg" className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/4940300/pexels-photo-4940300.jpeg" className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/1719344/pexels-photo-1719344.jpeg" className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg" className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/4918481/pexels-photo-4918481.jpeg" className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
      </section>
    </>
  )
}

export default Gallery
