import {Navbar} from "./components/exports"
function App() {
  return (
    <div className="App">
      <Navbar items={["Home","About Us","Testimonials","Blogs"]}/>
    </div>
  );
}

export default App;
