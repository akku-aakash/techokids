import React from "react";
import { LoadIndicator } from "devextreme-react/load-indicator";
import { connect } from "react-redux";


const connector = connect((state) => {
  return {
    isLoading: state.isLoading > 0,
  };
});

const Loader = (props) => {
  const { isLoading } = props;
  return (
    <LoadIndicator
      data-testid="Loader-id"
      id="medium-indicator"
      height={40}
      width={40}
      visible={isLoading}
    />
  );
};

export default connector(Loader);
