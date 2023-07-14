function AddCustomers() {
  return (
    <div className="container">
      <div className="row">
        <h5 className="mt-3 fw-medium ">Add Customers</h5>
        <div className="container-fluid">
          <div className="col-md-6 offset-md-3 bg-light p-3 rounded-4 border  ">
            <form >
              <div className="mb-3">
                <label className="form-label">Customer</label>
                <select
                  className="form-control"
                  aria-describedby="emailHelp"
                >
                    <option value={"customer"}>Customer</option>
                    <option value={"purchaser"}>Purchaser</option>
                </select>
                {/* <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div> */}
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">State</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Pincode</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">GSTIN</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              {/* <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Check me out</label>
              </div> */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomers;
