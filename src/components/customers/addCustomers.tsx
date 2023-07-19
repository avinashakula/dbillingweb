import { useState, useEffect } from "react";
import PageHeader from "../../utilities/components/pageHeader";
function AddCustomers() {
  const [customerData, setCustomerData] = useState({});
  const updateCustomersData = (e:any) => {
    if( e.target.name == "type" ){
      setCustomerData({...customerData, type:e.target.value});
    }else if( e.target.name == "name" ){
      setCustomerData({...customerData, name:e.target.value});
    }else if( e.target.name == "mobile" ){
      setCustomerData({...customerData, mobile:e.target.value});
    }else if( e.target.name == "state" ){
      setCustomerData({...customerData, state:e.target.value});
    }else if( e.target.name == "city" ){
      setCustomerData({...customerData, city:e.target.value});
    }else if( e.target.name == "pincode" ){
      setCustomerData({...customerData, pincode:e.target.value});
    }else if( e.target.name == "gstin" ){
      setCustomerData({...customerData, gstin:e.target.value});
    }else if( e.target.name == "address" ){
      setCustomerData({...customerData, address:e.target.value});
    }
  }

  const sendCustomersData = ()=>{
    console.log(customerData);
  }

  return (
    <div className="container">
      <div className="row">
        <PageHeader title={"Add Customer"} />
        <div className="container-fluid">
          <div className="col-md-6 offset-md-3 bg-white p-3 rounded-4 shadow-sm">
            {/* <form> */}
              <div className="mb-3">
                <label className="form-label">Type of Person</label>
                <select
                  name="type"
                  className="form-control"
                  aria-describedby="typeOfUser"
                  onChange={updateCustomersData}
                >
                  <option value={"customer"}>Customer</option>
                  <option value={"purchaser"}>Purchaser</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input name="name" type="text" className="form-control" onKeyUp={updateCustomersData} />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input name="mobile" type="text" className="form-control" onKeyUp={updateCustomersData} />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">State</label>
                  <input name="state" type="text" className="form-control" onKeyUp={updateCustomersData} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input name="city" type="text" className="form-control" onKeyUp={updateCustomersData} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Pincode</label>
                  <input name="pincode" type="text" className="form-control" onKeyUp={updateCustomersData} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">GSTIN</label>
                  <input name="gstin" type="text" className="form-control" onKeyUp={updateCustomersData} />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea  name="address" className="form-control"  onKeyUp={updateCustomersData}/>
              </div>
              <button type="submit" className="btn btn-primary" onClick={sendCustomersData}>
                Submit
              </button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomers;
