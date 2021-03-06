import React from 'react'
import {Redirect} from "react-router-dom";
import {StateType} from "../../store/redux-store";
import {connect} from "react-redux";

let mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth
})
// export const withAuthRedirect = (Component: React.ComponentType) => {
export const withAuthRedirect = (Component: any) => {
    class ContainerComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return (
                <Component {...this.props} />
            )
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(ContainerComponent)
    return (ConnectedAuthRedirectComponent)
}