import { TabConteiner } from './Tab.styled';
import StyledTabButton from './Button.styled';

export const Tab = ({ switchOperationType, btn }) => {
  // const [btn, setBtn] = useState(true);
  // const toggleBtn = () => {
  //   setBtn(!btn);
  //   console.log(btn);
  // };
  return (
    <TabConteiner>
      <StyledTabButton
        type="button"
        onClick={switchOperationType}
        active={btn}
        name="expense"
      >
        EXPENSES
      </StyledTabButton>
      <StyledTabButton
        type="button"
        onClick={switchOperationType}
        active={!btn}
        name="income"
      >
        INCOME
      </StyledTabButton>
    </TabConteiner>
  );
};

// e.target.name ()
// () => switchOperationType(OPERATION_TYPES.expense)
// () => switchOperationType(OPERATION_TYPES.income)

// useEffect(() => {

//   console.log('switchOperationType');
// }, [dispatch]);
