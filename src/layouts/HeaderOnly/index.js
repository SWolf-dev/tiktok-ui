import { Fragment } from 'react';
import Header from '../components/Header';

function DefautLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className="content">{children}</div>
        </Fragment>
    );
}

export default DefautLayout;
