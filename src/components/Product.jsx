import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3001/product`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {
        <div id = "table">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>More Details</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>INR : {product.price}</td>
                  <td>
                    <Link to={`/products/${product.id}`}>More...</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </>
  );
};

export default Products;
