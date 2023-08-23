import "./App.scss";
import Sidebar from "Sidebar/Sidebar";
import Feed from "Feed/Feed";
import Widgets from "Widgets/Widgets";

const App = () => {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
};

export default App;
