<script>
  import axios from 'axios'

  const downloadIotdbCli='https://github.com/apache/incubator-iotdb';
  const downloadGrafanaConnector='https://github.com/apache/incubator-iotdb';
  const downloadHadoopConnector='https://github.com/apache/incubator-iotdb';
  const downloadSparkConnector='https://github.com/apache/incubator-iotdb';

  const cheerio = require('cheerio');
  const DOC_URL_PREFIX = "https://raw.githubusercontent.com/apache/incubator-iotdb/";
  const DEFAULT_VERSION = "latest";
  const LATEST_STR = "latest";
  const SUPPORT_VERSION = {
    "latest": {
      "branch": "master",
      "doc-prefix": DOC_URL_PREFIX,
      'version': "V0.7.0",
      'text': "Latest",
      'content': '0-Content.md'
    },
    "0.7.0": {
      "branch": "0.7.0-doc",
      "doc-prefix": DOC_URL_PREFIX,
      'version': "V0.7.0",
      'text': "V0.7.0",
      'content': '0-Content.md'
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
    DEFAULT_VERSION,
    SUPPORT_VERSION,
    LATEST_STR,
    isReadyForPrerender
  }
</script>
