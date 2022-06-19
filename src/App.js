import "./App.scss";
import NavBar from "./components/NavBar";
import BodyPage from "./components/BodyPage";
import dataImport from "./backend/data";
/*
<NavBar></NavBar>
<BodyPage>
  <Heading></Heading>  
  <Invited></Invited>
  <DateBar></DateBar>
  <Shifts></Shifts>
    <Card></Card>
</BodyPage>
*/
function App() {
  const data = dataImport;
  return (
    <div className="App">
      <NavBar></NavBar>
      <BodyPage props={data}></BodyPage>
    </div>
  );
}

export default App;
