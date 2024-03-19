import { Header } from "../../components/Header";
import { Summary } from "../../components/ProfileSummary";
import { SearchForm } from "./components/SearchForm";
import {
  CardListGridContainer,
  TransactionsContainer,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { IssueCard } from "../../components/IssueCard";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (ctx) => {
    return ctx.transactions
  });

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <CardListGridContainer>
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
        </CardListGridContainer>
      </TransactionsContainer>
    </div>
  );
}
