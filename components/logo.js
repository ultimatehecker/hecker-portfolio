import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    display: inline-flex;
    align-items: center;
    font-size: 10px;
    font weight: bold;
    line-height: 20px;
    height: 30px;
    padding: 10px;

    &:hover img {
        transform: scale(1.1);
    }
`

const Logo = () => {
    const heckerImg = `/images/Hecker${useColorModeValue('', '-dark')}.png`;

    return (
        <Link href="/">
            <LogoBox>
                <Image src={heckerImg} alt="Hecker" width={20} height={20} />

                <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='M PLUS Rounded 1c' fontWeight="bold" ml={3}>
                    Hecker
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo