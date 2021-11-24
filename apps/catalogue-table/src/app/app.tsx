import styles from './app.module.scss';

import {SearchResultTableReactivelist} from "@catalogue/ui/search";

export function App() {
  return (
    <div className={styles.app}>
      <main>
        <SearchResultTableReactivelist
          url="http://localhost:9200/"
          index="gn-records"
          filter={"+tag.default:\"Reporting INSPIRE\""}
          mtdRoot="https://metawal.wallonie.be/geonetwork/srv/api/records"
          dataFields={['metadataIdentifier', 'mainLanguage','resourceTitleObject','resourceAltTitleObject','tag','link']}
          dataFieldsName={['Id', 'i18n', 'Titre','Nom abrégé','Mots-clés','liens']}
          resultNumber={3} />
      </main>
    </div>
  );
}

export default App;