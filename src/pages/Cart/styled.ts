import styled from "styled-components";

export const Heading = styled.div`
  &:after {
    content: "";
    position: absolute;
    border-width: 1px;
    border-color: #000000;
    top: -4px;
    left: -8px;
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`;
