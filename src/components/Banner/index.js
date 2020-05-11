import React from 'react'
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import {Container, Details, Img, Title, Description} from './styles'

import img13 from '../../assets/images/13.png'

export default function Banner(){
    return(
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>
                <Description>
                    Mantenha suas parcerias em dia, use o picPay para fazer suas combranças
                </Description>
            </Details>
            <Img source={img13} />
        </Container>
    )
}
