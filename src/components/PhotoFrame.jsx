import { useState } from 'react'

export default function PhotoFrame({ frameClass, alt, children }) {
  const [src, setSrc] = useState(null)

  const loadImg = (e) => {
    const f = e.target.files[0]
    if (!f) return
    setSrc(URL.createObjectURL(f))
  }

  return (
    <div className={`photo-frame ${frameClass}`}>
      {children}
      <img
        className={`user-photo${src ? ' loaded' : ''}`}
        alt={alt}
        src={src || undefined}
      />
      <label className="upload-btn">
        + foto propia
        <input type="file" accept="image/*" onChange={loadImg} />
      </label>
    </div>
  )
}
