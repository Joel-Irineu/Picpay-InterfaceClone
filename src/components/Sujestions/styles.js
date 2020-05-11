import styled from 'styled-components'

export const Container = styled.View`
    background: #1e222b;
    height: 140px;
    flex-direction: column;
`;

export const ScrollContainer = styled.ScrollView.attrs(()=> ({
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    contentContainerStyle:{
        alignItens: 'center',
        paddingLeft: 16,
    },
}))`

`;
export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    margin: 5px;
    text-decoration: linen;
`;
export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;
    justify-content: center;
`;
export const Img = styled.Image`

`;
export const Label = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
    text-align: center;
`;