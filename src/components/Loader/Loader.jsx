import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <StyledThreeCircles>
      <ThreeCircles
        height="50"
        width="50"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="red"
        innerCircleColor="blue"
        middleCircleColor="yellow"
      />
    </StyledThreeCircles>
  );
};

const StyledThreeCircles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
