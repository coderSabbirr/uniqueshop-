import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const FeaturedCollection = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://young-shore-30046.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="Feature">
            <div className="services">
                <h1 className="">Featured Collection</h1>
                <div className="row container">
                    {services.slice(8, 16)?.map((pd, index) => (
                        <div key={pd._id} className="col-md-12 col-lg-3 mt-2">
                            <div className="service p-3 border border mt-5 me-4  products-card">
                                <div className="service-img">
                                    <Link to={`/product/${pd._id}`}>
                                        {" "}
                                        <img className="w-100" src={`data:image/png;base64,${pd.image}`} alt="" />
                                    </Link>

                                </div>


                                <Link to={`/ product / ${pd._id}`}>
                                    {" "}
                                    <h5 >{pd.title}</h5>
                                </Link>
                                <p className="product-price">Price: {pd.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedCollection;