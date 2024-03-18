import { Link } from "react-router-dom";
import { IssueCardContainer } from "./styles";

export function IssueCard() {
  return (
    <IssueCardContainer>
      <header>
        <Link to="/issue/1">
          <h2>Issue Name</h2>  
        </Link>
        <span>
          Há 1 dia
        </span>
      </header>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam cupiditate ipsum quos ipsa voluptates molestiae suscipit illo, id quia. Voluptatem provident voluptas similique quibusdam repudiandae, in atque corrupti odit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam cupiditate ipsum quos ipsa voluptates molestiae suscipit illo, id quia. Voluptatem provident voluptas similique quibusdam repudiandae, in atque corrupti odit.
      </p>
    </IssueCardContainer>
  );
}