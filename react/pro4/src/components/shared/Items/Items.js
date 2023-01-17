import React from 'react'

const Items = (props) => {
    let {item} = props;
  return (
    <>
        <div className="col-sm-6 col-lg-4 all pizza">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={item.image} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    {item.name}
                  </h5>
                  <p>
                    {item.detail}
                  </p>
                  <div className="options">
                    <h6>
                      ${item.price}
                    </h6>
                    <a href="">
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Items