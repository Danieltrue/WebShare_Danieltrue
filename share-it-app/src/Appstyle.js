import styled from "styled-components";

const Appstyle = styled.div`
  header {
    height: 100px;
    background-color: #212121;
    color: #fff;
    width: 100%;
  }
  .main-page {
    max-width: 1140px;
    margin: 0 auto;
    margin-top: 2rem;
    .link {
      color: #0099ee;
      text-decoration: underline;
      margin-top: 0.5rem;
      & ~ button {
        margin-left: 10px;
        padding: 0.3rem 1rem;
        background-color: #fff;
        color: #fff;
        border: 1px solid #0099ee;
        color: #0099ee;
        border-radius: 3px;
      }
    }
    .book {
      display: flex;
      .detail {
        margin-left: 1rem;
        font-size: 80%;
        .bold {
          font-weight: bolder;
        }
        .book-btn {
          display: flex;
          margin-top: 1rem;
          margin-bottom: 1rem;
          width: 200px;
          button {
            margin-right: 10px;
            padding: 0.1rem 1rem;
            background-color: #0099ee;
            color: #fff;
            border: 0;
            border-radius: 3px;
          }
        }
      }
    }
  }
`;

export default Appstyle;
