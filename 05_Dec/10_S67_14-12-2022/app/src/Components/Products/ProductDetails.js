import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {/* <h2>Product Details {id}</h2> */}
      {Object.keys(data).length > 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "30px",
            boxShadow: "0 0 10px black",
            width: "300px",
            margin: "20px auto",
          }}
        >
          <h3 style={{ color: "green" }}>
            {Object.keys(data).length > 0
              ? data.category.toUpperCase() + " CATEGORY"
              : ""}
          </h3>
          <img
            src={Object.keys(data).length > 0 ? data.image : ""}
            width="300"
            height="300"
          />
          <h4>{Object.keys(data).length > 0 ? data.title : ""}</h4>
          <p>{Object.keys(data).length > 0 ? "$" + data.price : ""}</p>
        </div>
      ) : (
        <h4
          style={{
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading.............
        </h4>
      )}
    </div>
  );
}

export default ProductDetails;
