import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  width: 3em;
  height: 3em;
  border: 1em solid black;
  border-radius: 50%;
  color: black;
  border-top-color: transparent;
  animation: ${spin} 1s linear infinite;
`;

export default Loading;
