export default function ({ children }) {

  const handleEnded = (e) => {
    e.persist()
    setTimeout(() => {
      e.target.play();
    }, 3000);
  }

  return (
    <video autoPlay muted controls onEnded={handleEnded} width="260">
        {children}
    </video>
  )
}
