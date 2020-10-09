import styled from 'styled-components';
import familyBg from '../../assets/images/happy-family.jpg';
// import twilightSand from '../../assets/images/sandOnTwilight.jpg';
// import seatOnPier from '../../assets/images/seatOnPier.jpg';
import businessPeople from '../../assets/images/businessPeople.png';

export const Agilus = styled.iframe`
  width: 60%;
`;

export const Card = styled.div`
  width: 10vw;
  height: 15vh;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 10px 8px 8px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 10px 8px 8px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 8px 8px 0px rgba(0, 0, 0, 0.4);

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const FloatingMessage = styled.div`
  display: flex;
  align-self: start;
  align-items: center;

  width: 70vw;

  background: rgba(0, 0, 0, 0.2);

  & > p {
    padding: 16px;
    font-family: Verdana, sans-serif;
    color: var(--white);
    font-size: clamp(0.7rem, 1rem, 2rem);
    text-shadow: 1px 1px var(--darkSand);
  }
`;

export const Button = styled.button`
  width: max-content;
  height: max-content;

  border: 10px black;
  padding: 15px 20px;
`;

export const FirstSection = styled.div`
  background: url(${familyBg}) no-repeat bottom;
  background-size: cover;

  height: 100vh;

  position: relative;
`;

export const Partners = styled.div`
  min-height: 70vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 50vw 1fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas: 'partnerHand message' 'partnerHand partners';

  & > img {
    width: clamp(40vw, 60%, 60vw);
    height: 60%;

    grid-area: partnerHand;
    align-self: center;
    justify-self: center;
  }

  & > p {
    grid-area: message;
    justify-self: flex-start;
    align-self: center;

    font-family: Verdana, sans-serif;
    font-weight: bolder;
    font-size: clamp(0.7rem, 1.6rem, 2rem);
    color: black;
  }

  & > div {
    grid-area: partners;

    width: clamp(40vw, 90%, 100vw);

    display: inline-flex;
    flex-wrap: wrap;
    align-self: flex-start;
    justify-self: flex-start;
    gap: 15px;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;

    & > img {
      margin-top: 5vh;
      justify-self: center;
    }

    & > p {
      text-align: center;
      padding: 10vh 15vw;
    }

    & > div {
      align-self: center;
      width: 60vw;

      & > ${Card} {
        width: clamp(20vw, 25vw, 25vw);
        height: auto;
      }
    }
  }
  @media (max-width: 950px) {
    & > div > ${Card} {
      width: 100%;
      height: auto;
    }
  } ;
`;

export const Simulation = styled.div`
  min-height: 70vh;
  width: 100vw;

  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  & > ${Agilus} {
    visibility: hidden;
  }

  & > p,
  & > p > ${Button} {
    font-family: Verdana, sans-serif;
    font-weight: bolder;
    font-size: clamp(0.7rem, 1.6rem, 2rem);
    color: black;
  }

  & > p {
    text-align: end;
    width: 30%;
  }

  & > p > ${Button} {
    margin-top: 20px;
    background: transparent;
    border: 4px solid black;

    &:hover {
      color: white;
      background: black;
      cursor: pointer;
    }

    &:target {
      ${Agilus} {
        visibility: visible;
      }
    }
  }

  & > img {
    justify-self: start;
    max-width: 40vw;
  }
`;

export const ThirdSection = styled.div`
  background-image: url(${businessPeople});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  height: max-content;
  min-height: 70vh;
  overflow-x: hidden;

  & > div {
    min-height: 70vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);

    & > p {
      font-family: Verdana, sans-serif;
      font-weight: bolder;
      font-size: clamp(0.7rem, 1.6rem, 2rem);
      color: var(--grayLight);
      text-align: center;
      text-shadow: 2px 2px var(--darkSand);

      width: 30vw;
      margin: 15vh 0 5vh 0;
    }

    & > ${FloatingMessage} {
      margin-bottom: 10vh;
      align-self: center;
    }
  }
`;

export const ArrowDown = styled.div`
  .arrows {
    width: 60px;
    height: 72px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    bottom: 20px;
  }

  .arrows path {
    stroke: #fff;
    fill: transparent;
    stroke-width: 1px;
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite;
  }

  @keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes arrow /*Safari and Chrome*/ {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .arrows path.a1 {
    animation-delay: -1s;
    -webkit-animation-delay: -1s; /* Safari 和 Chrome */
  }

  .arrows path.a2 {
    animation-delay: -0.5s;
    -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
  }

  .arrows path.a3 {
    animation-delay: 0s;
    -webkit-animation-delay: 0s; /* Safari 和 Chrome */
  }
`;
