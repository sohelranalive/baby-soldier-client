import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect } from "react";

const Main = () => {

    const { pathname } = useLocation();


    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    //set the path name according to path
    useEffect(() => {
        const pageTitle = getTitleFromPathName(pathname);
        document.title = pageTitle;
    }, [pathname]);

    console.log(pathname);

    const getTitleFromPathName = (pathName) => {
        let pageTitle = '';

        switch (pathName) {
            case '/':
                pageTitle = 'Baby Soldier';
                break;
            case '/register':
                pageTitle = 'BS | Register';
                break;
            case '/login':
                pageTitle = 'BS | Login';
                break;
            case '/blog':
                pageTitle = 'BS | Blog';
                break;
            case '/addToys':
                pageTitle = 'BS | Add Toy';
                break;
            case '/allToys':
                pageTitle = 'BS | All Toy';
                break;
            case '/myToys':
                pageTitle = 'BS | My Toys';
                break;
            case 'toyDetails/':
                pageTitle = 'BS | Toy Details';
                break;

            default:
                if (pathName.startsWith('/toyDetails/')) {
                    const toyId = pathName.split('/toyDetails/')[1];
                    pageTitle = `Toy Details - ${toyId.slice(0, 5)}...`;
                } else {
                    pageTitle = 'Baby Soldier';
                }
                break;
        }

        return pageTitle;
    };

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;