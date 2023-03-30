import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: block;
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--colors-gray-900);
  font-weight: ${WEIGHTS.medium};
  /* Text slide-up effect */
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 500ms ease-in-out;

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transition: transform 250ms;
      transform: translateY(var(--translate-to));
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default NavLink;
