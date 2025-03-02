import './Box.css';

function Box({ imgSrc, altText, text }) {
  return (
  <>
    <div className="box">
      <img src={imgSrc} alt={altText} className="boxImg" />
      <p>{text}</p>
    </div> {/*Accepting props */}
  </>
  )
}

export default Box;