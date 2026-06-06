export default function PhotoFrame({ frameClass, alt, image, children }) {
  return (
    <div className={`photo-frame ${frameClass}`}>
      {children}
      {image && (
        <img className="user-photo loaded" alt={alt} src={image} />
      )}
    </div>
  )
}
