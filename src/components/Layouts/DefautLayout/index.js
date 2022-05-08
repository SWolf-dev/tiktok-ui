import { Fragment } from 'react';
import Header from '../components/Header';
import Sidebar from './Sidebar';

function DefautLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </Fragment>
    );
}

export default DefautLayout;
