import SummaryForm from "./pages/summary/SummaryForm"
import Options from "./pages/entry/Options"

function App() {
  return (
    <div>
      <h1>Sundaes on Demand</h1>
      <SummaryForm />
      <h3>Ice cream</h3>
      <Options optionType={'scoops'} />
      <h3>Toppings</h3>
      <Options optionType={'toppings'} />
    </div>
  );
}

export default App;
