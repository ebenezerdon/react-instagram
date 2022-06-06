import { posts } from '../data'

const Gallery = () => {
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <i className="add-photo fas fa-plus-square" />
      </label>
      <div className="gallery-nav" />
      <section className="gallery">
        {posts.map((post) => (
          <div className="item" key={post.id} tabIndex={0}>
            <img src={post.imageUrl} className="item-image" alt="" />
            <button className="delete-button">Delete</button>
          </div>
        ))}
      </section>
    </>
  )
}

export default Gallery
