
import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";

export function App() {
  return (
    <TrpcProvider>
    <AllIdeasPage/>
    </TrpcProvider>
  );
}
