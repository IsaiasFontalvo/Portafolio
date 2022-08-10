import { Container, Icon, Menu } from "semantic-ui-react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
    <Container>
      <Menu secondary>
        <Link href="/">
          <a>
            <Menu.Item>
              <Icon name="fighter jet" size="big" />
              Maverick
            </Menu.Item>
          </a>
        </Link>
        <Menu.Menu position="right">
          <Link href="/works">
            <a>
              <Menu.Item>Works</Menu.Item>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <Menu.Item>Blog</Menu.Item>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <Menu.Item>Contact</Menu.Item>
            </a>
          </Link>
        </Menu.Menu>
      </Menu>
    </Container>
  </header>
);
}



