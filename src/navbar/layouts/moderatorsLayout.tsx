import { Outlet, Link } from "react-router-dom";
export function ModeratorsLayout() {
  return (
    <>
      <div className="container">
        <div className="dropdown">
          <button
            className="btn btn-primary btn-sm"
            id="dropdownMenu"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-arrow-down-circle-fill"></i>
          </button>
          <ul
            style={{ padding: "10px" }}
            className="dropdown-menu"
            aria-labelledby="dropdownMenu"
          >
            <li>
              <Link to="/moderators/add" className="list-group-item">
                Add Moderators
              </Link>
            </li>
            <li>
              <Link to="/moderators" className="list-group-item ">
                Moderators
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet context={{ welcome: "hi" }} />
    </>
  );
}
