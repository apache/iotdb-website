<script>
  import axios from 'axios'

  const downloadIotdbCli='https://github.com/apache/incubator-iotdb';
  const downloadGrafanaConnector='https://github.com/apache/incubator-iotdb';
  const downloadHadoopConnector='https://github.com/apache/incubator-iotdb';
  const downloadSparkConnector='https://github.com/apache/incubator-iotdb';

  const cheerio = require('cheerio');
  const DOC_URL_PREFIX = "https://raw.githubusercontent.com/apache/incubator-iotdb/";
  const DOC_ENG_PREFIX = "/docs/Documentation";
  const DOC_CHN_PREFIX = "/docs/Documentation-CHN";
  const DEFAULT_VERSION = "0.8.0";
  const PROGRESS_STR = "progress";
  const SUPPORT_VERSION = {
    "0.8.0": {
      "branch": "release/0.8.0",
      "doc-prefix": DOC_URL_PREFIX,
      'text': "V0.8.0",
      'content': '0-Content.md'
    },
    "progress": {
      "branch": "master",
      "doc-prefix": DOC_URL_PREFIX,
      'text': "In progress",
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
    PROGRESS_STR,
    DOC_ENG_PREFIX,
    DOC_CHN_PREFIX,
    isReadyForPrerender
  }
</script>
