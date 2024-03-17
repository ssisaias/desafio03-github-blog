import { GithubLink, SummaryCard, SummaryContainer } from "./styles";
import { ArrowSquareOut, GithubLogo } from "phosphor-react";
import { useTheme } from "styled-components";

export function Summary() {
  const theme = useTheme();

  return (
    <SummaryContainer>
      <SummaryCard>
        <GithubLink href="https://github.com/isaias-silva" target="_blank">
          <span>Github</span> <ArrowSquareOut></ArrowSquareOut>{" "}
        </GithubLink>
        <header>
          <img src="https://avatars.githubusercontent.com/u/3528085?v=4" />
        </header>
        <div>
          <article>
            <h2>Isaias Silvolas</h2>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum, sapien euismod aliquam aliquam, lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed vestibulum, sapien euismod
              aliquam aliquam, lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed vestibulum, sapien euismod aliquam aliquam,
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum, sapien euismod aliquam aliquam, lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed vestibulum, sapien euismod
              aliquam aliquam, lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed vestibulum, sapien euismod aliquam aliquam,
              lorem ipsum dolor sit amet
            </p>
          </article>
          <footer>
            <div>
              <GithubLogo size={18} color={theme["base-text"]} />
              <span>ssisaias</span>
            </div>
            <div>
              <GithubLogo size={18} color={theme["base-text"]} />
              <span>ssisaias</span>
            </div>
            <div>
              <GithubLogo size={18} color={theme["base-text"]} />
              <span>ssisaias</span>
            </div>
          </footer>
        </div>
      </SummaryCard>
    </SummaryContainer>
  );
}
