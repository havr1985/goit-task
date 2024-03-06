import { Title, Container, Pic } from "./HomeContent.styled"
import carTitle from "../../assets/cartitle.png"

export const HomeContent = () => {
    return (
        <Container>
            <Title>EASY Rent Cars</Title>
            <Pic src={carTitle} alt="car" width={1000}/>
        </Container>
    )
}