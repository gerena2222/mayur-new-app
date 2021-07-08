import Head from "next/head";
import AdminSideBar from "./adminSidebar";
import AdminNavbar from "./adminNavbar";

const AdminLayout = (props) => {
  return (
    <>
      <Head>
        <link href="/css/dashboard.css" />
      </Head>
      <AdminNavbar />
      <div className="container-fluid">
        <div className="row">
          <AdminSideBar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {props.children}
          </main>
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
