import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
`;

export const Header = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;

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
    padding: 20px;
  }
`;

