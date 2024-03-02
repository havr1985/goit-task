
import { LeftBox, Link, Nav, NavWrap, RightBox } from "./Header.styled"


export const Header = () => {
    return (
      <header>
        <Nav>
          <NavWrap>
            <LeftBox>
              <Link to="/">Home</Link>
            </LeftBox>
            <RightBox>
              <Link to="/catalog">Catalog</Link>
              <Link to="/favorite">Favorite</Link>
            </RightBox>
          </NavWrap>
        </Nav>
      </header>
    );
}