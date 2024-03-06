import { Link } from "react-router-dom";
import { NotFoundBox, Title } from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <NotFoundBox>
      <Title>404</Title>
      <p>Page not found</p>
      <p>
        Please click on the link to go to the <Link to='/'>home page</Link>
      </p>
    </NotFoundBox>
  );
};

export default NotFoundPage;
