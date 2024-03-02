import { Title, Container, Pic } from "./HomeContent.styled"

export const HomeContent = () => {
    return (
        <Container>
            <Title>EASY Rent Cars</Title>
            <Pic src="/public/car.png" alt="car" width={1000}/>
        </Container>
    )
}