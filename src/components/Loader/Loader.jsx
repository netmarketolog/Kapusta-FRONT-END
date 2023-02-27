import { MutatingDots, RotatingLines } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrap>
      <MutatingDots
        height="100"
        width="100"
        color="#ff751d"
        secondaryColor="#ff751d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrap>
  );
}

export const LoaderBtn = () => {
  return (
    <LoaderWrap>
      <RotatingLines
        strokeWidth="5"
        strokeColor="#ff751d"
        animationDuration="0.75"
        width="30"
        visible={true}
      />
    </LoaderWrap>
  );
};
