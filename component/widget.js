import Link from 'next/link';
const Widget = () => {
    return (
        <div>
            <section className="prod pt-5 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <Link href="/product/produk/food">
                            <a className="product">
                                <div className="col-6 col-md-12">
                                    <div className="member">
                                        <img src="https://via.placeholder.com/400" className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="/product/produk/drink">
                            <a className="product">
                                <div className="col-6 col-md-12">
                                    <div className="member">
                                        <img src="https://via.placeholder.com/400" className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    )
}
export default Widget;