import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper>
      <BaseNavLink {...delegated}>{children}</BaseNavLink>
      <BoldNavLink {...delegated}>{children}</BoldNavLink>
    </Wrapper>
  );
};

const BaseNavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--colors-gray-900);
  font-weight: ${WEIGHTS.medium};
  transition: all 200ms ease-in-out;
`;

const BoldNavLink = styled(BaseNavLink)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  transform: translateY(90%);
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

  &:first-of-type {
    ${BaseNavLink} {
      color: var(--color-secondary);
    }
  }

  &:hover {
    ${BaseNavLink} {
      transform: translateY(-90%);
    }
    ${BoldNavLink} {
      transform: translateY(0%);
    }
  }
`;

export default NavLink;
