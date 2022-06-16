import React from "react";
import { useParams } from "react-router-dom";
import Notfound from "./Notfound";
const ProductDetails = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [productDetails, setProductDetails] = React.useState({});

  // basis this id: a network

  React.useEffect(() => {
    let isSubscribed = true;
    setIsLoading(true);
    fetch(`http://localhost:3001/product/${productId}`)
      .then((res) => res.json())
      .then((res) => {
        setIsError(false);
        return isSubscribed ? setProductDetails(res) : null;
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));

    return () => {
      isSubscribed = false;
    };
  }, [productId]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <Notfound/>;
  }

  return <div id = "box">
    <img style={{width: "50%"}} src = {productDetails.image} alt="" />
    <h2>{productDetails.title}</h2>
    <h2 style={{color:"Green"}}>Price : ₹ {productDetails.price}</h2>
    <p>{productDetails.description}</p>
    </div>;
};

export default ProductDetails;
