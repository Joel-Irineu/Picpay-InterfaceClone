import React from 'react'
import {TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import {Wrapper, Container, Header, Icons, Icon, BalanceContainer, BalanceTitle, Balance} from './styles'

import Sujestions from '../../components/Sujestions'
import Activities from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'

export default function Home(){
    return(
            <Wrapper>
                <Container>
                    <Header>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="qrcode-scan" size={32} color="#10c86e" />
                        </TouchableOpacity>
                    
                        <BalanceContainer>
                            <BalanceTitle>Meu Saldo</BalanceTitle>
                            <Balance>R$ 0,00</Balance>
                        </BalanceContainer>

                        <Icons>
                            <TouchableOpacity>
                                <AntDesign name="gift" size={25} color="#10c86e" />
                            </TouchableOpacity>
                            {/* <MaterialCommunityIcons name="percent" size={20} color="#10c86e" /> */}
                        </Icons>
                    </Header>
                    <Sujestions />
                    <Activities />
                    <Tips />
                    <Banner />
                </Container>
            </Wrapper>
    )
}
