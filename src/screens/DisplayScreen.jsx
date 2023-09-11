import  { useState } from 'react'
import{ Button, Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const images = ['image/pix-1.jpg','image/pix-2.jpg','image/pix-3.jpg',
'image/pix-4','image/pix-5.jpg','image/pix-6.jpg','image/pix-7.jpg'
    
]
const Display = () => {
    // const [image, setImage] = useState([])
  return (
    <div>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: "1",
          backgroundColor: "green",
          height: "80px",
          width: "100vw",
          marginBottom: "72px",
        }}
      >
        <div className="d-flex justify-content-around pt-3">
          <nav style={{color:'#fff',fontSize:'30px',fontStyle:'italic'}}> Welcome</nav>
          <nav>
            <Button type="button">
              {" "}
              Get Our Features
              <Link to="home"></Link>
            </Button>
          </nav>
        </div>
      </header>
      <div className="image-slider text-center">
        <Carousel>
          <Carousel.Item>
            <img className="img" src="image/pix-3.jpg" alt=""></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img" src="image/pix-2.png" alt=""></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img" src="image/pix-4.jpg" alt=""></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img" src="image/pix-5.jpg" alt=""></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img" src="image/pix-6.jpg" alt=""></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img" src="image/pix-8.jpg" alt=""></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img" src="image/pix-8.jpg" alt=""></img>
          </Carousel.Item>
        </Carousel>

        <div className="image-flex">
          {/* <img className="image-struc" src="image/s-1.jpg" alt=""></img>
          <img className="image-struc" src="image/s-2.jpg" alt=""></img>
          <img className="image-struc" src="image/s-3.jpg" alt=""></img>
          <img className="image-struc" src="image/s-4.jpg" alt=""></img> */}
          <img className="image-struc" src="image/pix-2.png" alt=""></img>
          <img className="image-struc" src="image/pix-6.jpg" alt=""></img>
          <img className="image-struc" src="image/pix-9.jpg" alt=""></img>
          <img className="image-struc" src="image/pix-8.jpg" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Display