import { Link, Outlet} from 'react-router-dom';
import logo from "./assets/img/logoblanco.png";

export const Layout = () => {
  return (
    <main>
        <nav>
            <Link to="/"><img src= {logo}  alt="LoVa logo" />  </Link> | {" "}
            <Link to="/Cart">Shopping Cart</Link> | {" "}
            <Link to="/about">About</Link>
        </nav>
        <section>
            <Outlet />
        </section>
    </main>
  );
}
