let Card = (props)=>{
    
    let {data}=props;
    return (
        <>
        {
            data.map((a)=>{
                return(
                    <div key={a.id} className='col-md-3'>
                        <div className="card">
                            <img src={a.image} className='card-img-top' style={{height : "220px"}}/>
                            <div className="card-body">
                                <p>{a.title}</p>
                                <small>$ {a.price}</small>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-sm btn-info'>Buy</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }   
            
        </>
    )
}
export default Card;