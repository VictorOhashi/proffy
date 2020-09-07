import styled from 'styled-components';

export const ToastContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ToastItem = styled.div`
  position: relative;
  width: 35rem;
  margin: 1rem 3rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.primaryTitle};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

export const ToastText = styled.p`
  flex: 1;
  padding: 1rem 0;
`;

export const CloseButton = styled.button`
  align-self: flex-start;
  padding: 0 0.5rem;
  right: 0;
  top: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.primaryTitle};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.complementText};
  }
`;

export const ToastIcon = styled.div`
  margin: 0.5rem;
  width: 2rem;
`;

export const CloseIcon = styled.div`
  width: 1.6rem;
`;
