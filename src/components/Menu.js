import { Header, Logo, MenuList, Container } from "../styles/components/Menu"

export default () => {
  return (
    <Container>
    <Header>
      <Logo>Sub-LinK</Logo>

      <MenuList>
        <li><a href="">Pessoas</a></li>
        <li><a href="">Empresas</a></li>
      </MenuList>

      <MenuList>
        <li><a href="">Nossos Planos</a></li>
        <li><a href="">Cobertura</a></li>
        <li><a href="">FAQ</a></li>
        <li><a href="">Contato</a></li>
      </MenuList>

    </Header>
    </Container>
  )
}
