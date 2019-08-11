import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LoginForm } from "components";
import { userActions } from "store/actions";

function LoginContainer(props) {
  const { fetchUserLogin } = props;
  const handleSubmit = ({ login, password }) => {
    const data = { login, password };
    fetchUserLogin(data);
  };
  return <LoginForm handleSubmit={handleSubmit} />;
}

const mapStateToProps = state => {
  return {
    data: state.messageReducer.data,
    isLoading: state.messageReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUserLogin: userActions.fetchUserLogin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
