import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10px;
`;

export const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

`;

export const Logo = styled.div`
  font-size: 30px;
`;

export const MenuList = styled.ul`
  display: flex;
  margin-top: 20px;

  a {
    text-decoration: none;
    color:#727272;
    font-weight: 700;
    transition: color 0.2s;

    &:hover {
      color: #a480ff;
    }
  }

  li {
    padding: 0 20px;
  }
`;

