import { ReactComponent as Icon } from '../../images/icons/BackToMain.svg';
import { Link, Text, Sum } from './BackToMain.styled';

export const BackToMain = () => {
  return (
    <Sum>
      <Link href="https://www.google.com/">
        <Icon></Icon> <Text>Main page</Text>
      </Link>
    </Sum>
  );
};
