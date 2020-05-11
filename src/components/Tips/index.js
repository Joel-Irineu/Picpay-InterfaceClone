import React from 'react'
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import {Container, Option, Title, Img} from './styles'
import {itens} from '../../services/itensTips'

export default function Tips(){
    return(
        <Container>
            {itens.map((iten)=> (
                <Option bgColor={iten.color}>
                    <Title>{iten.title}</Title>
                    <Img source={iten.img} />
                </Option>
            ))}
        </Container>
    )
}
