import './index.css'
import Header from "../header/index.jsx";
import Footer from "../footer/index.jsx";

function Layout({children}) {
    return <div className="layout">
        <Header />
        {children}
        <Footer />
    </div>
}

export default Layout;