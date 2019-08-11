import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RegisterForm } from "components";
import { userActions } from "store/actions";

function RegisterContainer(props) {
  const { fetchUserRegister } = props;
  const handleSubmit = ({ login, email, password }) => {
    const data = { login, email, password };
    fetchUserRegister(data);
  };
  return <RegisterForm handleSubmit={handleSubmit} />;
}

const mapStateToProps = state => {
  return {
    data: state.messageReducer.data,
    isLoading: state.messageReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchUserRegister: userActions.fetchUserRegister },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
