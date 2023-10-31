import React from 'react'
import './reviving.css'
import img from '../assests/image-retro-pcs.jpg'
import { reviving } from '../data'

const Reviving = () => {
    return (
        <section className='reviving-section max-lg:px-5 mt-24 pb-20'>
            <div className="container lg:flex max-lg:space-y-5 m-auto justify-between items-center">
                {
                    reviving.map((item) => {
                        return <div key={item.id} className="reviving-box flex items-center">
                            <div className="box-image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="box-details ml-5">
                                <h2>0{item.id}</h2>
                                <h5>{item.title}</h5>
                                <p>{item.para}</p>
                            </div>
                        </div>
                    })
                }

            </div>
        </section>
    )
}

export default Reviving
