import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  height: ${(props) =>
    props.page === "SignIn" || props.page === "SignUp" || props.page === "cart"
      ? "100vh"
      : "auto"};
  margin: ${(props) =>
    props.page === "SignIn" || props.page === "SignUp" || props.page === "cart"
      ? "0"
      : "80px 0 60px 0"};
  //padding: 0 15px;

  padding: ${(props) => (props.page === "cart" ? "80px 0 150px 0" : "0 25px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) =>
    props.page === "SignIn" || props.page === "SignUp" ? "center" : "start"};
  background-color: ${(props) =>
    props.page === "SignIn" || props.page === "SignUp" ? "#15616d" : "#F8F5F0"};
  overflow: scroll;

  a {
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
  }

  h2 {
    color: #15616d;
    font-size: 32px;
    font-weight: 700;
    margin: 20px 0;
    text-align: center;
  }
`;

export default Page;
