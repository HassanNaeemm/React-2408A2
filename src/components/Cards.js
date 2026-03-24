function Cards(props) {
   var mydata = props.data //.Normal Variables
  return (
    <>
      <div className="container">
        <div className="row">
         {
            mydata.map((d,id)=>(
                // html to be printed
            <div className="col-lg-4">
            <div className="card mt-3">
              <img
                className="card-img-top"
                src=""
                alt="Title"
              />
              <div className="card-body">
                <h4 className="card-title">{d.name}</h4>
                <p className="card-text">{d.email}</p>
                <button className="btn btn-primary w-100">Buy Now</button>
              </div>
            </div>
          </div>
            ))
         }
        </div>
      </div>
    </>
  );
}
export default Cards;
