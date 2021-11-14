import React from "react";

import {TouchableOpacity} from "react-native";

import Icomoon from "react-native-icomoon";

// utils
import PropTypes from "prop-types";

// icomoon json data
import icomoonJsonData from "@/assets/icons/selection.json";

const IconComponent = ({component, onPress, ...restProps}) => {
  return (
    <TouchableOpacity onPress={onPress} {...restProps}>
      {component()}
    </TouchableOpacity>
  );
};

// Types
IconComponent.propTypes = {
  component: PropTypes.func,
  onPress: PropTypes.func,
};

const IconMoonComponent = ({
  name,
  onPress,
  IcomoonProps = {},
  ...restProps
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...restProps}>
      <Icomoon iconSet={icomoonJsonData} name={name} {...IcomoonProps} />
    </TouchableOpacity>
  );
};

// Types
IconMoonComponent.propTypes = {
  name: PropTypes.string,
  onPress: PropTypes.func,
  IcomoonProps: PropTypes.object,
};

export {IconComponent, IconMoonComponent};
