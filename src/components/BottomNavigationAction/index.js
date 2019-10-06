import React from "react";
import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";
import { Flex, Text, Box } from "@chakra-ui/core";

const propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired
};

const defaultProps = {
  exact: false
};

const BottomNavigationAction = ({
  className,
  exact,
  to,
  iconElement: IconElement,
  children,
  ...props
}) => {
  const location = useLocation();

  return (
    <Flex
      as={Link}
      to={to}
      color={to === location.pathname ? "white" : "brand.200"}
      flexDir="column"
      align="center"
      flexGrow="1"
      flexBasis="100%"
      p="2"
      {...props}
    >
      <Box as={IconElement} size="22px" />
      <Text fontSize="xs">{children}</Text>
    </Flex>
  );
};

export default BottomNavigationAction;

BottomNavigationAction.propTypes = propTypes;
BottomNavigationAction.defaultProps = defaultProps;