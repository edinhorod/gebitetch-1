import styled from "styled-components/native";
import Toast from "react-native-tiny-toast";

import theme from "../../src/globalStyles/theme";

export const DefaultContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 80px;
  /* background-color: ${theme.color.primary};
  border: 1px solid green; */
`;

export const DefaultTitle = styled.Text`
  font-size: 20px;
  /* font-family: ${theme.fonts.bold}; */
  color: ${theme.color.dark};
`;

export const UserImage = styled.Image`
  margin: 10px 0;
  border-width: 5px;
  border-color: ${theme.color.primary};
  border-radius: 50px;
  width: 70px;
  height: 70px;
`;

export const InputDefaultView = styled.View`
  flex-direction: row;
  padding: 5px;
  margin: 5px
  border-radius: 10px;
  background-color: ${theme.color.primaryDark};
`;

export const toastError = (msg) =>
  Toast.show(msg, {
    position: Toast.position.BOTTOM,
    containerStyle: {
      backgroundColor: theme.color.attention,
      borderRadius: 15,
    },
    textStyle: {
      color: theme.color.light,
    },
    shadow: true,
    imgStyle: {},
    mask: false,
    maskStyle: {},
    duration: 2000,
    animation: true,
  });

export const toastSuccess = (msg) =>
  Toast.show(msg, {
    position: Toast.position.BOTTOM,
    containerStyle: {
      backgroundColor: theme.color.success,
      borderRadius: 15,
    },
    textStyle: {
      color: theme.color.light,
    },
    shadow: true,
    imgStyle: {},
    mask: false,
    maskStyle: {},
    duration: 2000,
    animation: true,
  });

export const TextRequired = styled.Text`
  width: 100%;
  justify-content: flex-start;
  color: red;
  font-size: 11px;
  text-align: right;
  margin-right: 10px;
`;
