import React from 'react';

import Items from '../../shared/Items/Items';
const Home = () => {

  let data = [
    {
      name : "Burger",
      price : 100.00,
      image : "assets/images/f1.png",
      detail : "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
    },
    {
      name : "Pizza",
      price : 250.00,
      image : "assets/images/f2.png",
      detail : "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
    },
    {
      name : "Sandwich",
      price : 90.00,
      image : "assets/images/f3.png",
      detail : "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
    },
    {
      name : "Sandwich",
      price : 90.00,
      image : "assets/images/f3.png",
      detail : "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
    }
  ]

  return (
    <>
    
  <section className="food_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Menu
        </h2>
      </div>

      <ul className="filters_menu">
        <li className="active" data-filter="*">All</li>
        <li data-filter=".burger">Burger</li>
        <li data-filter=".pizza">Pizza</li>
        <li data-filter=".pasta">Pasta</li>
        <li data-filter=".fries">Fries</li>
      </ul>

      <div className="filters-content">
        <div className="row grid">
          {
            data.map((x)=>{
              return(
                <Items key={x} item={x} />
              )
            })
          }
          
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>
    
    </>
  )
}

export default Home