import React from 'react';

const Card = ({data}) => {
    
    console.log(data);

    return (
        <div style={{ display: 'inline-block' }}>
            <div className='col'>
                <div className="card m-3" style={{width: '18rem'}}>
                    <img src={data.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-black">{data.name}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Card;
