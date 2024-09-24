import "./App.css";
import Card from "./Components/Card";
function App() {
  return (
    <>
      <h1>Resorts Lite</h1>

      <div className="container">
        <Card
          country="Indonesia"
          image="src\assets\1.jpg"
          price="$589/night"
          hotel="Gili Air Hotel"
          star={4.8}
        />
        <Card
          country="Seychelles"
          image="src\assets\2.jpg"
          price="$629/night"
          hotel="Hilton Resort"
          star={4.2}
        />
        <Card
          country="US Vrigin Islands"
          image="src\assets\3.jpg"
          price="$485/night"
          hotel="Goa Resort"
          star={3.5}
        />
        <Card
          country="Bahamas"
          image="src\assets\4.jpg"
          price="$729/night"
          hotel="Kuredu Resort"
          star={4.1}
        />
        <Card
          country="Mauritius"
          image="src\assets\5.jpg"
          price="$877/night"
          hotel="Trou D'eau Douce"
          star={4.9}
        />
        <Card
          country="Bermuda"
          image="src\assets\6.jpg"
          price="$365/night"
          hotel="Staniel Cay Hotel"
          star={3.2}
        />
      </div>
    </>
  );
}

export default App;
