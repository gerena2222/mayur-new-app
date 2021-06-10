import Link from 'next/link';
import { useRouter } from 'next/router';
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="../static/logo.png" width="auto" height="40" alt="" />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className={isActive('/')}>
                                <Link href="/">
                                    <a className="nav-link">Home </a>
                                </Link>
                            </li>
                            <li className={isActive('/product/product')}>
                                <Link href="/product/product">
                                    <a className="nav-link">Product </a>
                                </Link>
                            </li>
                            <li className={isActive('/event/event')}>
                                <Link href="/event/event">
                                    <a className="nav-link">Event </a>
                                </Link>
                            </li>
                            <li className={isActive('/partnerts/partnerts')}>
                                <Link href="/partners/partners">
                                    <a className="nav-link">Partners </a>
                                </Link>
                            </li>
                            <li className={isActive('/education/education')}>
                                <Link href="/education/education">
                                    <a className="nav-link">Education </a>
                                </Link>
                            </li>
                            <li className={isActive('/about/about')}>
                                <Link href="/about/about">
                                    <a className="nav-link">About </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;