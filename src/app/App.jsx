import AppRouter from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  )
}
