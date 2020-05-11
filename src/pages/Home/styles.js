import styled from 'styled-components'

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

export const Container = styled.ScrollView`

`;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Icons = styled.View`
    flex-direction: row;
    margin: 0;
`;
export const Icon = styled.View`
    padding-left: 5px;
`;

export const BalanceContainer = styled.View`

`;

export const BalanceTitle = styled.Text`
    color: rgba(255,255,255,.8);
    font-size: 14px;
    text-align: center;
`;
export const Balance = styled.Text`
    color: #fff;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
`;
