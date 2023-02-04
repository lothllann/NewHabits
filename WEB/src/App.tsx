import Header from "./components/Header";
import SumaryTable from "./components/SumaryTable";
import "./styles/global.css";
import "./lib/dayjs";




// navigator.serviceWorker
//   .register("service-worker.js")
//   .then(async (serviceWorker) => {
//     let subscription = await serviceWorker.pushManager.getSubscription();

//     if (!subscription) {
//       const pkResponse = await api.get("/push/public_key");

//       subscription = await serviceWorker.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: pkResponse.data.publicKey,
//       });
//     }

//     await api.post("/push/register", {
//       subscription,
//     });

//     await api.post("/push/send", {
//       subscription,
//     });
//   });

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
