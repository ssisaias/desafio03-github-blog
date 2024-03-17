import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  CardListGridContainer,
  TransactionsContainer,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
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
