import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  // const filterdata = list.filter((data) => data.category === "Free");
  // console.log(filterdata);
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white ">
      <div>
        <h1 className="text-xl pb-2 font-bold">Free Offered Courses </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          voluptatem dolorum recusandae necessitatibus modi, commodi culpa
          nulla rem, eius dignissimos dolore doloremque similique illo
          molestiae ipsa facere accusantium fugit consequatur.
        </p>
      </div>
      
      <div>
      <Slider {...settings}>
        {book.map((item) => (
        
            <Cards item={item} key={item.id} />
        
        ))}
      </Slider>
      </div>
    </div>
  );
  
}

export default Freebook;
