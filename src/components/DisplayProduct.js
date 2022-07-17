const Display = () => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/customer/dashboard", config)
      .then((result) => {
        console.log(result);
        setProductdetails(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });

  });
  
  return (
    <div className="Container">
      <div className="row">
        {productDetails.map((singleProduct) => {
          return (
            <div className="col-md-4">
              <p>Product Name: Nike </p>
              <p>Product Description: Something desc</p>
              <p>Product Quantity: 10</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Display;
