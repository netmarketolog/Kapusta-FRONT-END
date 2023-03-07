import Select from 'react-select';
import styled from 'styled-components';

export const SelectCustom = styled(Select)`
  .custom-select__control {
    width: 280px;
    height: 44px;
    background-color: transparent;
    border-radius: 0px;
    border-bottom-right-radius: 25px;
    padding-left: 20px;
    outline: none;
    border: 2px solid #ffffff;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    color: #c7ccdc;
    box-shadow: none;
    cursor: pointer;
    :hover {
      outline: none;
      border: 2px solid #c7ccdc;
    }
    @media screen and (min-width: 768px) {
      width: 186px;
      border-bottom-right-radius: 0px;
      border: 2px solid #f5f6fb;
    }

    @media screen and (min-width: 1280px) {
      width: 169px;
    }
  }

  .custom-select__control--menu-is-open {
    outline: none;
  }

  .custom-select__indicator-separator {
    display: none;
  }
  .custom-select__value-container {
    margin: 0px;
    padding: 0px;
    outline: none;
  }
  .custom-select__menu {
    width: 280px;
    margin: 0px;
    padding: 0px;
    border-radius: 0px;
    border: 2px solid #f5f6fb;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    color: #c7ccdc;
    box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);
    @media screen and (min-width: 768px) {
      width: 186px;
      border-bottom-right-radius: 0px;
    }

    @media screen and (min-width: 1280px) {
      width: 169px;
    }
  }

  .custom-select__menu-list {
    margin: 0px;
    padding: 0px;
    ::-webkit-scrollbar {
      width: 0;
    }
  }

  .custom-select__option {
    padding: 10px 0px 10px 20px;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    color: #c7ccdc;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      display: flex;
      padding: 0px 20px 0px 20px;
      height: 33px;
      align-items: center;
    }
  }

  .custom-select__option--is-focused {
    background: #f5f6fb;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    color: #52555f;
    :hover {
      background: #f5f6fb;
    }
  }
  .__web-inspector-hide-shortcut__,
  .css-mohuvp-dummyInput-DummyInput {
    /* display: none; */
  }

  .custom-select__option--is-selected {
    background: #f5f6fb;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    color: #52555f;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    color: #52555f;
    :hover {
      background: #f5f6fb;
      font-size: 12px;
      line-height: 1.17;
      letter-spacing: 0.02em;
      color: #52555f;
    }
  }
  .custom-select__single-value {
    padding: 0px;
    margin: 0px;
  }
  .custom-select__indicator {
    padding: 0px;
    margin: 0px;
    margin-right: 15px;
  }
  /* ::-webkit-scrollbar-thumb {
    background-color: red;
  } */
`;
