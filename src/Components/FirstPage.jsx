import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <>
      <Link to="/pencil">Pencil</Link>
      <Link to="/nameslip">Name Slip</Link>
      <Link to="/wallet">Wallet</Link>
      <Link to="/geometry">Geometry</Link>
      <Link to="/shadowbox">Shadow Box</Link>
      <Link to="/Panda">Panda</Link>
    </>
  );
};

export default FirstPage;
