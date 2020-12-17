import './App.css';
import Header from '../Header/header-component'
import InfoSectionComponent from '../Sections/InfoSections/info-section-component'
import InfoSectionSecondComponent from '../Sections/InfoSectionsSecond/info-section-second-component'
import ItemSectionContaier from '../Sections/ItemSections/item-section-container'
function App() {
  return (
    <div className="app">
      <Header/>
      <InfoSectionComponent/>
      <ItemSectionContaier/>
      <InfoSectionSecondComponent/>
    </div>
  );
}

export default App;
