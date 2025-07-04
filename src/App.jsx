
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-transparent relative z-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Scroll down to see animation</h1>
      </div>
      
      <InfoSection />
      
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <h2 className="text-3xl font-semibold">More content below</h2>
      </div>
      
      <div className="min-h-screen bg-green-300 flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Even more content</h2>
      </div>
    </>
  );
}

export default App;
