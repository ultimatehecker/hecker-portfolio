import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Namaste, I&apos;m a versatile developer based in India!
            </Box>
            
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant={'page-title'}>
                        Hecker&apos;s Portfolio
                    </Heading>

                    <p>Digital Enthusiast ( Professional Gamer / Devloper )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page