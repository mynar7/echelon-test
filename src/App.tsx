import { useEffect, useState } from "react";
import { getClasses, trainingClass } from "./util/echelon";
import Loading from "./components/loading";
import ErrorMessage from "./components/error";
import MainPage from "./pages/main";
import "./App.css";

function App() {
  const [classes, setClasses] = useState<trainingClass[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    getClasses().then((classData) => {
      if (classData) setClasses(classData);
      else setErrorLoading(true);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : errorLoading ? (
        <ErrorMessage />
      ) : (
        <MainPage classList={classes} />
      )}
    </>
  );
}

export default App;
