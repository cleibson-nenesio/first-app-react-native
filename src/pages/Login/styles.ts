import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const FormWrapper = styled.View`
  width: 100%;
  padding: 0 32px;
  gap: 16px;
  margin: 32px 0;
`;

export const DefaultInput = styled.TextInput`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #f3c623;
  padding: 16px 0;
`;
