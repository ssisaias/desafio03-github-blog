import { IssueCardContainer } from "./styles";

export function IssueCard() {
  return (
    <IssueCardContainer>
      <header>
        <a href="#">
          <h2>Issue Name</h2>  
        </a>
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