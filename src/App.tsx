import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CreateHackathonScreen from "./screens/CreateHackathonScreen";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import HackathonScreen from "./screens/HackathonScreen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/new-hackathon",
      element: <CreateHackathonScreen />,
    },
    {
      path: "/edit-hackathon/:id",
      element: <CreateHackathonScreen />,
    },
    {
      path: "/hackathons/:id",
      element: <HackathonScreen />,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ]);

  return (
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
