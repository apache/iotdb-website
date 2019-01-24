<script>
  const downloadIotdbCli='https://github.com/apache/incubator-iotdb';
  const downloadGrafanaConnector='https://github.com/apache/incubator-iotdb';
  const downloadHadoopConnector='https://github.com/apache/incubator-iotdb';
  const downloadSparkConnector='https://github.com/apache/incubator-iotdb';

  const cheerio = require('cheerio');
  const DOC_URL_PREFIX = "https://raw.githubusercontent.com/apache/incubator-iotdb/";
  const LATEST_VERSION = "0.7.0";
  const SUPPORT_VERSION = {
    LATEST_VERSION:{
      "branch": "doc",
      "doc-prefix": DOC_URL_PREFIX,
      'version': "V0.7.0"
    },
    "0.7.0": {
      "branch": "doc",
      "doc-prefix": DOC_URL_PREFIX,
      'version': "V0.7.0"
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
    isReadyForPrerender
  }
</script>
