import Habit from "./components/HabitDay";
import Header from "./components/Header";
import SumaryTable from "./components/SumaryTable";
import "./styles/global.css";
import './lib/dayjs'



function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        
        <Header />
        <SumaryTable />

      </div>
    </div>
  );
}

export default App;
