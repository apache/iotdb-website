<script>
  const downloadIotdbCli='https://github.com/apache/incubator-iotdb';
  const downloadGrafanaConnector='https://github.com/apache/incubator-iotdb';
  const downloadHadoopConnector='https://github.com/apache/incubator-iotdb';
  const downloadSparkConnector='https://github.com/apache/incubator-iotdb';

  const cheerio = require('cheerio');
  const DOC_URL_PREFIX = "https://raw.githubusercontent.com/apache/incubator-iotdb/";
  const LATEST_VERSION = "0.7.0";
  const LATEST_STR = "latest";
  const SUPPORT_VERSION = {
    "latest": {
      "branch": "doc",
      "doc-prefix": DOC_URL_PREFIX,
      'version': "V0.7.0",
      'chapters': [
        '1-Overview.md',
        '2-Concept.md',
        '3-Operation%20Manual.md',
        '4-Deployment%20and%20Management.md',
        '5-SQL%20Documentation.md',
        '6-JDBC%20Documentation.md'
      ]
    },
    "0.7.0": {
      "branch": "doc",
      "doc-prefix": DOC_URL_PREFIX,
      'version': "V0.7.0",
      'chapters': [
        '1-Overview.md',
        '2-Concept.md',
        '3-Operation%20Manual.md',
        '4-Deployment%20and%20Management.md',
        '5-SQL%20Documentation.md',
        '6-JDBC%20Documentation.md'
      ]
    }
  };

  function isReadyForPrerender(html){
    const $ = cheerio.load(html);
    $('ul a').each( function(i, elem) {
      $(this).attr('href', window.location.href+$(this).attr('href'));
    });
    return $('body').html();
  };

  export default
  {
    downloadIotdbCli,
    downloadGrafanaConnector,
    downloadHadoopConnector,
    downloadSparkConnector,
    LATEST_VERSION,
    SUPPORT_VERSION,
    LATEST_STR,
    isReadyForPrerender
  }
</script>
