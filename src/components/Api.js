import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
function Api() {
  var [mydata, SetData] = useState([]);
  var [myobj, SetObj] = useState({});
  useEffect(() => {
    //Logic Yahan
    //80% use case API Scenario

    fetch("https://localhost:44334/api/Custom/getproducts")
      .then((rec) => rec.json())
      .then((data) => {
        SetData(data);
        console.log(data);
      });
  });

  function getrecord() {
    var inp = document.getElementById("mysearchbar").value;
    fetch("https://jsonplaceholder.typicode.com/posts/" + inp)
      .then((rec) => rec.json())
      .then((data) => SetObj(data));
  }
  function postrecord() {
    var name = document.getElementById("prodname").value;
    var desc = document.getElementById("proddesc").value;
    var price = document.getElementById("prodprice").value;
    var userid = 3004;

    var obj = {
      name: name,
      description: desc,
      price: price,
      userId: userid,
    };

    fetch("https://localhost:44334/api/Custom/addproducts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((
      
    ) => {
      Toastify({
        text: "Data has been inserted",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #072b7e, #011e26)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      document.getElementById("prodname").value = "";
      document.getElementById("proddesc").value = "";
      document.getElementById("prodprice").value = "";
    });
  }
    function deleterecord(prodid)
    {
      fetch('https://localhost:44334/api/Custom/deleteproduct/'+prodid,{
        method:"delete"
      })
      .then((res) => console.log(res))
      alert("Deleted Successfully")
    }

  return (
    <>
      <div className="container">
        <h1>Add Products</h1>
        <input
          type="text"
          id="prodname"
          placeholder="Enter Product Name"
          className="w-100 p-1"
        />
        <textarea
          id="proddesc"
          className="w-100 p-1"
          placeholder="Enter Description Here"
        ></textarea>
        <input
          type="number"
          id="prodprice"
          placeholder="Enter Price"
          className="w-100 p-1"
        />
        <button onClick={postrecord} className="btn btn-info">
          Submit Data
        </button>
        <hr />
        <h1>Search API</h1>
        <input
          type="number"
          id="mysearchbar"
          placeholder="Enter Your ID"
          className="w-100 p-1"
        />
        <button onClick={getrecord} className="btn btn-success mt-1">
          Search User
        </button>
        <hr />
        <p>
          <b>Title = </b>
          {myobj.title}
        </p>
        <hr />
        <h1>Api Component</h1>
        {mydata.map((d, id) => (
          <>
            <h3>{d.name}</h3>
            <p>{d.description}</p>
            <b>Price : {d.price}</b>
            <br/>

            <button className="btn btn-danger" onClick={() => deleterecord(d.id)}>Delete Product</button>
            <hr />
          </>
        ))}
      </div>
    </>
  );
}
export default Api;
