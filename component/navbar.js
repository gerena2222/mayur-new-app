import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  function isActive(route) {
    if (route == router.pathname) {
      return "nav-item active";
    } else {
      return "";
    }
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top shadow"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #fff9c4 , #ffee58,#ffeb3b)",
        }}
      >
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/static/logo.png" width="auto" height="40" alt="" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" key="">
              <li className={isActive("/")}>
                <Link href="/">
                  <a className="nav-link">Beranda </a>
                </Link>
              </li>
              <li className={isActive("/product/")}>
                <Link href="/product/">
                  <a className="nav-link">Produk </a>
                </Link>
              </li>
              <li className={isActive("/event")}>
                <Link href="/event">
                  <a className="nav-link">Promo </a>
                </Link>
              </li>
              <li className={isActive("/partners")}>
                <Link href="/partners">
                  <a className="nav-link">Mitra </a>
                </Link>
              </li>
              <li className={isActive("/education")}>
                <Link href="/education">
                  <a className="nav-link">Edukasi </a>
                </Link>
              </li>
              <li className={isActive("/about")}>
                <Link href="/about">
                  <a className="nav-link">Tentang </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
