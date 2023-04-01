import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>TodoList</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to={"/"}>
          <h5 style={{ marginRight: 10 }}>Home</h5>
        </Link>
        <Link to={"/admin"}>
          <h5>Admin</h5>
        </Link>
      </div>
    </header>
  );
};

export default Header;
