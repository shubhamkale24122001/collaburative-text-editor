import TextEditor from './TextEditor';
import{BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidv4()}`}/>
        </Route>
        <Route path="/documents/:documentId">
          <TextEditor/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
