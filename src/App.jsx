import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./stores";
import { RouteApp } from "./routes";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouteApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
