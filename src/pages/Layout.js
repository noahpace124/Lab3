import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <div class="navbar">
            <div class="title">
                Krusty Krab Pizza
            </div>
            <div class="links">
                <Link id="link" to="/">Home </Link>
                &nbsp;
                <Link id="link" to="/pizzas">Pizzas </Link>
                &nbsp;
                <Link id="link" to="/contact">Contact Me</Link>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
        <Outlet />
    </>
  )
};

export default Layout;