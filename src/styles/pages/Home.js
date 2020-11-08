import styled from 'styled-components';

export const Container = styled.div`
  .featured {
  }

  .post-loop {
    padding-bottom: 70px;
  }

  .post {
    margin: 50px 0;
  }

  .post img {
    margin-bottom: 10px;
  }

  .post p {
    font-size: 12px;
  }

  .post h3 {
    color: #004178;
    font-size: 20px;
  }

  .post-home {
    margin: 0;
    padding: 0;
  }

  /* post-spotlight */
  .post-spotlight {
    display: inline-block;
    position: relative;
    margin: 0;
    padding: 0;
  }

  .post-spotlight figcaption {
    position: absolute;
    top: 50px;
    left: 130px;
  }

  .post-spotlight figcaption h4 {
    color: #004178;
    max-width: 190px;
  }

  .post-spotlight figcaption p {
    color: #004178;
    max-width: 300px;
    font-size: 14px;
  }

  /* post-content */
  .post-content {
    display: inline-block;
    position: relative;
    margin: 0;
    padding: 0;
  }

  .post-content figcaption {
    position: absolute;
    bottom: 50px;
    left: 50px;
  }

  .post-content figcaption h4 {
    color: #ffffff;
    max-width: 400px;
    font-size: 18px;
  }

  .post-content figcaption p {
    color: #ffffff;
    max-width: 350px;
    font-size: 14px;
  }

  /* post-mobile */
  .post-mobile {
    display: inline-block;
    position: relative;
    margin: 0;
    padding: 0;
  }

  .post-mobile figcaption {
    position: absolute;
    bottom: 50px;
    left: 50px;
  }

  .post-mobile figcaption h4 {
    color: #ffffff;
    max-width: 250px;
  }

  .post-mobile figcaption p {
    color: #ffffff;
    max-width: 300px;
    font-size: 14px;
  }

  .line {
    width: 90%;
    margin: 0 auto;
    height: 2px;
    background: #4faf98;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;
