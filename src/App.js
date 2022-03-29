import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import ListadoPeliculas from './views/ListadoPeliculas';
import Blog from './views/Blog';


function App() {
  
  return (
	  <BrowserRouter>
		<Switch>
			<Route path="/blog">
				<Blog /> 
			</Route>

			<Route path="/">
				<ListadoPeliculas /> 
			</Route>
		</Switch>
	  </BrowserRouter> 
	
  );
}

export default App;
