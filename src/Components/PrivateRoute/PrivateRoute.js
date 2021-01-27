import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ userInfo, children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                userInfo.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        userInfo: state.user
    }
}

export default connect(
    mapStateToProps,
    null
)(PrivateRoute);