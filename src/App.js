import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { ParallelQueriesPage } from "./components/ParallelQueries.page";
import { DynamicParallelQueriesPage } from "./components/DynamicParallel.page";
import { DependentQueriesPage } from "./components/DependentQueries";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/rq-super-heroes/:heroId">
              <RQSuperHeroPage />
            </Route>
            <Route exact path="/rq-paginated">
              <PaginatedQueriesPage />
            </Route>
            <Route exact path="/rq-dynamic-parallel">
              <DynamicParallelQueriesPage heroIds={[1, 3]} />
            </Route>
            <Route exact path="/rq-parallel">
              <ParallelQueriesPage />
            </Route>
            <Route exact path="/rq-dependent">
              <DependentQueriesPage email="vishwas@example.com" />
            </Route>
            <Route exact path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route exact path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
