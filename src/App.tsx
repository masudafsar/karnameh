import ModalProvider from '@provider/modalProvider';
import Router from '@route/router';

function App() {
  return (
    <div id="App" className="text-black text-base">
      <ModalProvider>
        <Router />
      </ModalProvider>
    </div>
  );
}

export default App;
