import Header from "./Header";
import Footer from "./Footer";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="theme-section ">
        <Header />
        <section className="mid-section">
          <div className="full-height">{children}</div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default AdminLayout;
