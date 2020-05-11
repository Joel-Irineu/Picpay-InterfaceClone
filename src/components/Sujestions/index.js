import React from 'react'
import {ScrollContainer, Option, Img, Label, Title, Container} from './styles'
import {itens} from '../../services/itensSujestions'

export default function Sujestions(){
    return(
        <Container>
                <Title>Sujestões</Title>
            <ScrollContainer>
                {itens.map((iten)=> (
                    <Option key={iten.key}>
                        <Img source={iten.img} />
                        <Label>{iten.label}</Label>
                    </Option>
                ))}
            </ScrollContainer>
            </Container>
    )
}