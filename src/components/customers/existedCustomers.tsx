import PageHeader from "../../utilities/components/pageHeader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { remove } from "../../store/customersSlice"
function ExistedCustomers() {
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customers)
  const del = (item)=>{
    dispatch(remove(item))
  }
  return (
    <div className="container">
      <div className="row">
        <PageHeader title={"Existed Customers"} />
        <div className="container-fluid">
          {
            customers.map((customer, index)=>{
              return <>
                <h2>{customer.name}</h2>
                <button onClick={()=>del(customer.name)}>Delete {customer.name}</button>
              </>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ExistedCustomers;
