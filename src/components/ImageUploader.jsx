import React, { useState, useRef } from 'react'
import '../styles/ImageUploader.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImageUploader = () => {
  const fileInputRef = useRef(null)
  const [selectedImages, setSelectedImages] = useState([])
  const [hoveredImage, setHoveredImage] = useState(null)

  const handleImageDelete = (index) => {
    const updatedImages = [...selectedImages]
    updatedImages.splice(index, 1)
    setSelectedImages(updatedImages)
    setHoveredImage(null)
  }
  const isDuplicateImage = (imageUrl) => {
    return selectedImages.some((image) => image === imageUrl)
  }

  const handleFileSelect = (event) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const imageArray = []
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const imageUrl = e.target.result
          if (!isDuplicateImage(imageUrl)) {
            imageArray.push(imageUrl)
          }
          if (imageArray.length === files.length) {
            setSelectedImages([...selectedImages, ...imageArray])
          }
        }
        reader.readAsDataURL(files[i])
      }
    }
  }

  const handleDrop = (event) => {
    event.preventDefault()
    const files = event.dataTransfer.files
    if (files && files.length > 0) {
      const imageArray = []
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const imageUrl = e.target.result
          if (!isDuplicateImage(imageUrl)) {
            imageArray.push(imageUrl)
          }
          if (imageArray.length === files.length) {
            setSelectedImages([...selectedImages, ...imageArray])
          }
        }
        reader.readAsDataURL(files[i])
      }
    }
  }
  const preventDefault = (event) => {
    event.preventDefault()
  }

  const handleImageHover = (index) => {
    setHoveredImage(index)
  }

  return (
    <div className="uploaderContainer">
      <div
        className="imageDropZone"
        onDragOver={preventDefault}
        onDragEnter={preventDefault}
        onDrop={handleDrop}>
        {selectedImages.length ? (
          <>
            {selectedImages.map((image, index) => (
              <div
                className="uploadedImg"
                key={index}
                onMouseEnter={() => handleImageHover(index)}
                onMouseLeave={() => handleImageHover(null)}>
                {hoveredImage === index && (
                  <div
                    className="deleteButton"
                    onClick={() => handleImageDelete(index)}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{ color: '#ffffff', height: '80%', width: '80%' }}
                    />{' '}
                  </div>
                )}
                <img src={image} alt={`Selected ${index}`} />
              </div>
            ))}
            <button
              className="uploaderBtn"
              onClick={() => fileInputRef.current.click()}>
              +
            </button>
          </>
        ) : (
          <>
            <button
              className="uploaderBtn"
              onClick={() => fileInputRef.current.click()}>
              +
            </button>
            <p>Choose a file or drag it here.</p>
          </>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        ref={fileInputRef}
        multiple
      />
    </div>
  )
}

export default ImageUploader
