import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import SingleProduct from "../SingleProduct/SingleProduct";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [displayProduct, setDisplayProduct] = useState([]);

  useEffect(() => {
    fetch("https://young-shore-30046.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const shuffle = ([...arr]) => {
          let m = arr.length;
          while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
          }
          return arr;
        };
        setDisplayProduct(shuffle(data));
      })

      .finally(() => setIsLoading(false));
  }, []);
  if (isloading) {
    return (
      <>
        {" "}
        <Header />
        <div className="d-flex justify-content-center mt-5 product-view-loading ">
          <svg width="200" height="200" viewBox="0 0 100 100">
            <polyline
              class="line-cornered stroke-still"
              points="0,0 100,0 100,100"
              stroke-width="10"
              fill="none"
            ></polyline>
            <polyline
              class="line-cornered stroke-still"
              points="0,0 0,100 100,100"
              stroke-width="10"
              fill="none"
            ></polyline>
            <polyline
              class="line-cornered stroke-animation"
              points="0,0 100,0 100,100"
              stroke-width="10"
              fill="none"
            ></polyline>
            <polyline
              class="line-cornered stroke-animation"
              points="0,0 0,100 100,100"
              stroke-width="10"
              fill="none"
            ></polyline>
          </svg>
          <svg width="200" height="200" viewBox="0 0 100 100">
            <polyline
              class="line-cornered stroke-still"
              points="0,0 100,0 100,100"
              stroke-width="10"
              fill="none"
            ></polyline>
            <polyline
              class="line-cornered stroke-still"
              points="0,0 0,100 100,100"
              stroke-width="10"
              fill="none"
            ></polyline>
            <polyline
              class="line-cornered stroke-animation"
              points="0,0 100,0 100,100"
              stroke-width="10"
              fill="none"
            ></polyline>
            <polyline
              class="line-cornered stroke-animation"
              points="0,0 0,100 100,100"
              stroke-width="10"
              fill="none"
            ></polyline>
          </svg>
        </div>
      </>
    );
  } else {
    const handleOnChange = (e) => {
      const searchText = e.target.value;
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setDisplayProduct(filteredProducts);
    };
    return (
      <>
        <Header />
        <div className="Feature">
          {/* total data={products.length} */}
          <div class="input-group mb-3 container">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={handleOnChange}
            />
          </div>
          <h1 className="">Available products</h1>

          <div className="container row">
            {displayProduct.map((product) => (
              <SingleProduct
                key={products._id}
                product={product}
              ></SingleProduct>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Product;
