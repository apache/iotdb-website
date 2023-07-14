const e=JSON.parse(`{"key":"v-5b0bbf0e","path":"/UserGuide/Master/FAQ/FAQ-for-cluster-setup.html","title":"FAQ for Cluster Setup","lang":"en-US","frontmatter":{"description":"1. Cluster StartUp and Stop 1). Failed to start ConfigNode for the first time, how to find the reason? Make sure that the data/confignode directory is cleared when start ConfigN...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/Master/FAQ/FAQ-for-cluster-setup.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/Master/FAQ/FAQ-for-cluster-setup.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"FAQ for Cluster Setup"}],["meta",{"property":"og:description","content":"1. Cluster StartUp and Stop 1). Failed to start ConfigNode for the first time, how to find the reason? Make sure that the data/confignode directory is cleared when start ConfigN..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-14T09:47:07.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-14T09:47:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FAQ for Cluster Setup\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-14T09:47:07.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. Cluster StartUp and Stop","slug":"_1-cluster-startup-and-stop","link":"#_1-cluster-startup-and-stop","children":[{"level":3,"title":"1). Failed to start ConfigNode for the first time, how to find the reason?","slug":"_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason","link":"#_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason","children":[]},{"level":3,"title":"2). ConfigNode is started successfully, but why the node doesn't appear in the results of show cluster?","slug":"_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster","link":"#_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster","children":[]},{"level":3,"title":"3). Failed to start DataNode for the first time, how to find the reason?","slug":"_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason","link":"#_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason","children":[]},{"level":3,"title":"4). Failed to remove DataNode, how to find the reason?","slug":"_4-failed-to-remove-datanode-how-to-find-the-reason","link":"#_4-failed-to-remove-datanode-how-to-find-the-reason","children":[]},{"level":3,"title":"5). Whether the down DataNode can be removed?","slug":"_5-whether-the-down-datanode-can-be-removed","link":"#_5-whether-the-down-datanode-can-be-removed","children":[]},{"level":3,"title":"6).What should be paid attention to when upgrading from 0.13 to 1.0?","slug":"_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0","link":"#_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0","children":[]}]},{"level":2,"title":"2. Cluster Restart","slug":"_2-cluster-restart","link":"#_2-cluster-restart","children":[{"level":3,"title":"1). How to restart any ConfigNode in the cluster?","slug":"_1-how-to-restart-any-confignode-in-the-cluster","link":"#_1-how-to-restart-any-confignode-in-the-cluster","children":[]},{"level":3,"title":"2). How to restart any DataNode in the cluster?","slug":"_2-how-to-restart-any-datanode-in-the-cluster","link":"#_2-how-to-restart-any-datanode-in-the-cluster","children":[]},{"level":3,"title":"3). If it's possible to restart ConfigNode using the old data directory when it's removed?","slug":"_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed","link":"#_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed","children":[]},{"level":3,"title":"4). If it's possible to restart DataNode using the old data directory when it's removed?","slug":"_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed","link":"#_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed","children":[]},{"level":3,"title":"5). Can we execute start-confignode.sh/start-datanode.sh successfully when delete the data directory of given ConfigNode/DataNode without killing the PID?","slug":"_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid","link":"#_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid","children":[]}]},{"level":2,"title":"3. Cluster Maintenance","slug":"_3-cluster-maintenance","link":"#_3-cluster-maintenance","children":[{"level":3,"title":"1). How to find the reason when Show cluster failed, and error logs like \\"please check server status\\" are shown?","slug":"_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown","link":"#_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown","children":[]},{"level":3,"title":"2). How to fix one DataNode when the disk file is broken?","slug":"_2-how-to-fix-one-datanode-when-the-disk-file-is-broken","link":"#_2-how-to-fix-one-datanode-when-the-disk-file-is-broken","children":[]},{"level":3,"title":"3). How to decrease the memory usage of ConfigNode/DataNode?","slug":"_3-how-to-decrease-the-memory-usage-of-confignode-datanode","link":"#_3-how-to-decrease-the-memory-usage-of-confignode-datanode","children":[]}]}],"git":{"createdTime":1689328027000,"updatedTime":1689328027000,"contributors":[{"name":"Haonan","email":"hhaonan@outlook.com","commits":1}]},"readingTime":{"minutes":3.19,"words":958},"filePathRelative":"UserGuide/Master/FAQ/FAQ-for-cluster-setup.md","localizedDate":"July 14, 2023","autoDesc":true}`);export{e as data};
