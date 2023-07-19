import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
      <nav className="navbar navbar-expand-lg bg-light bg-gradient shadow">
        <div className="container">
          <Link className="navbar-brand fw-medium " to="#">
            D-Billing
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  <i className="bi bi-house-door-fill text-primary"></i>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Billing
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/billing/newBilling">
                      Billing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/billing/allTransactions">
                      All Transactions
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/billing/bills">
                      Bills
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/billing/purchases">
                      Purchases
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/billing/pendingCredits">
                      Pending Credits
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/billing/completedCredits">
                      Completed Credits
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/billing/payments">
                      Payments
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/billing/pendingInvoices">
                      Pending Invoices
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Stock
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/stock/add">
                      Add Stock
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/stock/existedStock">
                      Existed Stock
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/stock/inactive">
                      Inactive Stock
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/stock/createMeasure">
                      Create Measure
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/stock/inactiveMeasure">
                      Inactive Measure
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ledgerRetail">
                  Ledger Retail
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ledgerPurchase">
                  Ledger Purchase
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Customers
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/customers/add">
                      Add Customer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/customers/existedCustomers">
                    Existed Customers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/customers/purchasers">
                      Purchasers
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Moderators
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/moderators/add">
                      Add Moderator
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/moderators/existedModerators">
                    Existed Moderators
                    </Link>
                  </li>
                </ul>
              </li>
             
            </ul>

            <div className="d-flex" role="profile">
              <div className="nav-item dropdown">
                <button
                  className="btn btn-sm btn-primary dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle"></i> Profile
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/profile/changePassword">
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/profile/logout">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
