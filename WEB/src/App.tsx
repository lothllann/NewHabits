import Header from "./components/Header";
import SumaryTable from "./components/SumaryTable";
import "./styles/global.css";
import "./lib/dayjs";
import { api } from "./lib/axios";
import { CloudFog } from "phosphor-react";

// window.Notification.requestPermission((permission) => {
//   if (permission === "granted") {
//     new window.Notification("Habits", {
//       body: "Texto",
//     });
//   }
// });

navigator.serviceWorker.register('service-worker.js')
  .then(async serviceWorker => {
    let subscription = await serviceWorker.pushManager.getSubscription()

    if(!subscription){
      const pkResponse = await api.get('/push/public_key')

      subscription = await serviceWorker.pushManager.subscribe({
        applicationServerKey: pkResponse.data.publicKey,
      })
    }

    console.log(subscription)
  })

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
