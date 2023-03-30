import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2} />
        </CloseButton>
        <Nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms;
`;

const Content = styled(DialogContent)`
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: slideIn 500ms both cubic-bezier(0, -0.01, 0.38, 0.99);
  }

  position: relative;
  background: white;
  width: 300px;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  padding-right: 20px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: calc(20 / 16 * 1rem);
  font-weight: ${WEIGHTS.medium};
  font-size: calc(18 / 16 * 1rem);
  color: var(--color-gray-900);
  animation: ${fadeIn} 300ms both;
  animation-delay: 250ms;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: calc(14 / 16 * 1rem);
  font-weight: ${WEIGHTS.normal};
  font-size: calc(14 / 16 * 1rem);
  color: var(--color-gray-700);
  animation: ${fadeIn} 300ms both;
  animation-delay: 250ms;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  padding: 16px;
  margin-right: -16px;
  margin-top: -26px;
  animation: ${fadeIn} 300ms both;
  animation-delay: 250ms;
`;

export default MobileMenu;
