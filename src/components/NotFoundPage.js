import React from 'react';
import { Link } from 'react-router-dom';


class NotFoundPage extends React.Component{
    render(){
        return (
            <div className="container content center">
                <h1 className="itle">404 Not Found</h1>
                <Link to="/">
                    <button className="btn-large green">
                        Home
                    </button>
                </Link>
          </div>
        );
    }
}
export default NotFoundPage;