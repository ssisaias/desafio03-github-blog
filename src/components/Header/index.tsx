import { HeaderContainer, HeaderContent } from "./styles";

import logoImg from "../../assets/logo.svg";
import coverImg from "../../assets/cover.png"

export function Header() {

  return (
    <HeaderContainer bgImg={coverImg}>
      <HeaderContent>
        <img src={logoImg} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
}
