import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { useContext } from "react";
import { useTheme } from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export function Summary() {
  const theme = useTheme();
  const { userData } = useContext(UserContext);

  return (
    <SummaryContainer>
      <Link to={userData.url}>
        <span>Github</span> <ArrowSquareOut></ArrowSquareOut>{" "}
      </Link>
      <SummaryCard>
        <header>
          <img src={userData.avatar_url} alt={userData.name} />
        </header>
        <div>
          <article>
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
          </article>
          <footer>
            {userData.login && (
              <div>
                <GithubLogo
                  size={18}
                  weight="fill"
                  color={theme["base-text"]}
                />
                <span>{userData.login}</span>
              </div>
            )}
            {userData.company && (
              <div>
                <Buildings size={18} weight="fill" color={theme["base-text"]} />
                <span>{userData.company}</span>
              </div>
            )}
            {userData.followers && (
              <div>
                <Users size={18} weight="fill" color={theme["base-text"]} />
                <span>{userData.followers} seguidores</span>
              </div>
            )}
          </footer>
        </div>
      </SummaryCard>
    </SummaryContainer>
  );
}
