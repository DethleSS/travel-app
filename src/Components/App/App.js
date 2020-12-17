import './App.css';
import Header from '../Header/header-component'
import InfoSectionComponent from '../Sections/InfoSections/info-section-component'
import InfoSectionSecondComponent from '../Sections/InfoSectionsSecond/info-section-second-component'
function App() {
  return (
    <div className="app">
      <Header/>
      <InfoSectionComponent/>
      <InfoSectionSecondComponent/>
    </div>
  );
}

export default App;
