
export default function GymImageList() {
  return (
    <>
    <h1 style={{textAlign: "center"}}>Gallery</h1>
    <div className="image-container" id="gallery">
      {Array(9).fill().map((n,i)=>(
        <img src={"src/assets/images/thegym" + (i+1)+".jpg"} alt="" className="image-item" />
      ))}
    </div>
    
    </>
  );
}


