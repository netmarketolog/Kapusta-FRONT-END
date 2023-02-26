import { AuthForm } from 'components/Forms/AuthForm/AuthForm';
import HeroTitle from 'components/HeroTitle/HeroTitle';
import { Home } from './Home.styled';

export const HomePages = () => {
  return (
    <Home>
      <AuthForm></AuthForm>
      <HeroTitle></HeroTitle>
    </Home>
  );
};
