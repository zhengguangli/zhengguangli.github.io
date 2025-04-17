"use strict";(self.webpackChunkvolatile=self.webpackChunkvolatile||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"mihomo-useage","metadata":{"permalink":"/blog/mihomo-useage","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-04-17-mihomo.md","source":"@site/blog/2025-04-17-mihomo.md","title":"Mihomo \u4f7f\u7528\u4ecb\u7ecd","description":"\u4f7f\u7528 systemd","date":"2025-04-17T00:00:00.000Z","tags":[{"inline":false,"label":"Hola","permalink":"/blog/tags/hola","description":"Hola tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":1.25,"hasTruncateMarker":false,"authors":[{"name":"Zhengguang Li","title":"Senior Java Software Engineer","url":"https://github.com/zhengguangli","page":{"permalink":"/blog/authors/zhengguangli"},"socials":{"x":"https://x.com/lizg_volatile","github":"https://github.com/zhengguangli"},"imageURL":"https://pbs.twimg.com/profile_images/1912531007225622530/v2wG_Ro6_400x400.png","key":"zhengguangli"}],"frontMatter":{"slug":"mihomo-useage","title":"Mihomo \u4f7f\u7528\u4ecb\u7ecd","authors":["zhengguangli"],"tags":["hola","docusaurus"],"hide":["toc"]},"unlisted":false,"nextItem":{"title":"QA \u5e94\u7528\u4f7f\u7528\u4ecb\u7ecd","permalink":"/blog/qa-application-useage"}},"content":"## \u4f7f\u7528 systemd\\r\\n\\r\\n- \u4e0b\u8f7d\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6 [releases](https://github.com/MetaCubeX/mihomo/releases)\\r\\n\\r\\n- \u5c06\u4e0b\u8f7d\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\u91cd\u540d\u540d\u4e3a `mihomo` \u5e76\u79fb\u52a8\u5230 `/usr/local/bin/`\\r\\n\\r\\n- \u4ee5\u5b88\u62a4\u8fdb\u7a0b\u7684\u65b9\u5f0f\uff0c\u8fd0\u884c mihomo\u3002\\r\\n\\r\\n\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06 mihomo \u4e8c\u8fdb\u5236\u6587\u4ef6\u590d\u5236\u5230 /usr/local/bin, \u914d\u7f6e\u6587\u4ef6\u590d\u5236\u5230 /etc/mihomo:\\r\\n\\r\\n```shell\\r\\ncp mihomo /usr/local/bin\\r\\ncp config.yaml /etc/mihomo\\r\\n```\\r\\n\\r\\n\u4e0b\u8f7d _country.mmdb_\\r\\n```shell\\r\\ncdd /etc/mihomo\\r\\nwget https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country.mmdb\\r\\n```\\r\\n\\r\\n\u521b\u5efa systemd \u914d\u7f6e\u6587\u4ef6 `/etc/systemd/system/mihomo.service`:\\r\\n\\r\\n```ini\\r\\n[Unit]\\r\\nDescription=mihomo Daemon, Another Clash Kernel.\\r\\nAfter=network.target NetworkManager.service systemd-networkd.service iwd.service\\r\\n\\r\\n[Service]\\r\\nType=simple\\r\\nLimitNPROC=500\\r\\nLimitNOFILE=1000000\\r\\nCapabilityBoundingSet=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE CAP_SYS_TIME CAP_SYS_PTRACE CAP_DAC_READ_SEARCH CAP_DAC_OVERRIDE\\r\\nAmbientCapabilities=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE CAP_SYS_TIME CAP_SYS_PTRACE CAP_DAC_READ_SEARCH CAP_DAC_OVERRIDE\\r\\nRestart=always\\r\\nExecStartPre=/usr/bin/sleep 1s\\r\\nExecStart=/usr/local/bin/mihomo -d /etc/mihomo\\r\\nExecReload=/bin/kill -HUP $MAINPID\\r\\n\\r\\n[Install]\\r\\nWantedBy=multi-user.target\\r\\n```\\r\\n\\r\\n\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u91cd\u65b0\u52a0\u8f7d systemd:\\r\\n\\r\\n```shell\\r\\nsystemctl daemon-reload\\r\\n```\\r\\n\\r\\n\u542f\u7528 mihomo \u670d\u52a1\uff1a\\r\\n\\r\\n```shell\\r\\nsystemctl enable mihomo\\r\\n```\\r\\n\\r\\n\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u7acb\u5373\u542f\u52a8 mihomo:\\r\\n\\r\\n```shell\\r\\nsystemctl start mihomo\\r\\n```\\r\\n\\r\\n\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4f7f mihomo \u91cd\u65b0\u52a0\u8f7d\uff1a\\r\\n\\r\\n```shell\\r\\nsystemctl reload mihomo\\r\\n```\\r\\n\\r\\n\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 mihomo \u7684\u8fd0\u884c\u72b6\u51b5\uff1a\\r\\n\\r\\n```shell\\r\\nsystemctl status mihomo\\r\\n```\\r\\n\\r\\n\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 mihomo \u7684\u8fd0\u884c\u65e5\u5fd7\uff1a\\r\\n\\r\\n```shell\\r\\njournalctl -u mihomo -o cat -e\\r\\n```\\r\\n\\r\\n\u6216\\r\\n\\r\\n```shell\\r\\njournalctl -u mihomo -o cat -f\\r\\n```"},{"id":"qa-application-useage","metadata":{"permalink":"/blog/qa-application-useage","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-04-17-readme.md","source":"@site/blog/2025-04-17-readme.md","title":"QA \u5e94\u7528\u4f7f\u7528\u4ecb\u7ecd","description":"Reference Documentation","date":"2025-04-17T00:00:00.000Z","tags":[{"inline":false,"label":"Hola","permalink":"/blog/tags/hola","description":"Hola tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":1.12,"hasTruncateMarker":false,"authors":[{"name":"Zhengguang Li","title":"Senior Java Software Engineer","url":"https://github.com/zhengguangli","page":{"permalink":"/blog/authors/zhengguangli"},"socials":{"x":"https://x.com/lizg_volatile","github":"https://github.com/zhengguangli"},"imageURL":"https://pbs.twimg.com/profile_images/1912531007225622530/v2wG_Ro6_400x400.png","key":"zhengguangli"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"qa-application-useage","title":"QA \u5e94\u7528\u4f7f\u7528\u4ecb\u7ecd","authors":["zhengguangli","yangshun"],"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Mihomo \u4f7f\u7528\u4ecb\u7ecd","permalink":"/blog/mihomo-useage"},"nextItem":{"title":"MD\u4f7f\u7528\u65b9\u6cd5","permalink":"/blog/useage"}},"content":"## *Reference* _Documentation_\\r\\n\\r\\nFor further reference, please consider the following sections:\\r\\n\\r\\n* [Official Gradle documentation](https://docs.gradle.org)\\r\\n* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/3.4.4/gradle-plugin)\\r\\n* [Create an OCI image](https://docs.spring.io/spring-boot/3.4.4/gradle-plugin/packaging-oci-image.html)\\r\\n* [Spring Reactive Web](https://docs.spring.io/spring-boot/3.4.4/reference/web/reactive.html)\\r\\n\\r\\n### Guides\\r\\n\\r\\nThe following guides illustrate how to use some features concretely:\\r\\n\\r\\n* [Building a Reactive RESTful Web Service](https://spring.io/guides/gs/reactive-rest-service/)\\r\\n\\r\\n### Additional Links\\r\\n\\r\\nThese additional references should also help you:\\r\\n\\r\\n* [Gradle Build Scans \u2013 insights for your project\'s build](https://scans.gradle.com#gradle)\\r\\n\\r\\n\\r\\n### Use proxy\\r\\n* Win\\r\\n```shell\\r\\n$env:HTTP_PROXY=\\"http://10.172.10.103:7897\\"; $env:HTTPS_PROXY=\\"http://10.172.10.103:7897\\"\\r\\n```\\r\\n\\r\\n* Linux\\r\\n```shell\\r\\nexport https_proxy=http://10.172.10.103:7897 http_proxy=http://10.172.10.103:7897 all_proxy=socks5://10.172.10.103:7897\\r\\n```\\r\\n\\r\\n### Use proxy in docker\\r\\n```shell\\r\\nnano /etc/hosts\\r\\n```\\r\\n```shell\\r\\nnano ~/.docker/config.json\\r\\n```\\r\\n```json\\r\\n{\\r\\n    \\"proxies\\": {\\r\\n        \\"default\\": {\\r\\n            \\"httpProxy\\": \\"http://10.172.10.103:7897\\",\\r\\n            \\"httpsProxy\\": \\"https://http://10.172.10.103:7897\\",\\r\\n            \\"noProxy\\": \\"*.test.example.com,.example.org,127.0.0.0/8\\"\\r\\n        }\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n```shell\\r\\ndocker run -itd --restart=always \\\\\\r\\n    --name=redis -p 6379:6379 \\\\\\r\\n    -e REDIS_PASSWORD=e9830726f351 \\\\\\r\\n    -e REDIS_AOF_ENABLED=no \\\\\\r\\n    -v /opt/bitnami/redis/data:/bitnami/redis/data \\\\\\r\\n    bitnami/redis:latest\\r\\n```\\r\\n\\r\\n```shell\\r\\ndocker run -itd --restart=always \\\\\\r\\n --name mysql -p 3306:3306 \\\\\\r\\n -e MYSQL_ROOT_PASSWORD=2cb99bc3feab \\\\\\r\\n -v /opt/bitnami/mysql/data:/bitnami/mysql/data \\\\\\r\\n bitnami/mysql:latest\\r\\n```\\r\\n\\r\\n```yaml\\r\\n# Copyright Broadcom, Inc. All Rights Reserved.\\r\\n# SPDX-License-Identifier: APACHE-2.0\\r\\n\\r\\nservices:\\r\\n  mysql:\\r\\n    image: docker.io/bitnami/mysql:8.4\\r\\n    ports:\\r\\n      - \'3306:3306\'\\r\\n    volumes:\\r\\n      - \'mysql_data:/bitnami/mysql/data\'\\r\\n    environment:\\r\\n      # ALLOW_EMPTY_PASSWORD is recommended only for development.\\r\\n      - ALLOW_EMPTY_PASSWORD=yes\\r\\n    healthcheck:\\r\\n      test: [\'CMD\', \'/opt/bitnami/scripts/mysql/healthcheck.sh\']\\r\\n      interval: 15s\\r\\n      timeout: 5s\\r\\n      retries: 6\\r\\n\\r\\nvolumes:\\r\\n  mysql_data:\\r\\n    driver: local\\r\\n```\\r\\n\\r\\n```groovy\\r\\nrepositories {\\r\\n    maven {\\r\\n        url \'https://maven.aliyun.com/repository/public/\'\\r\\n    }\\r\\n    maven {\\r\\n        url \'https://maven.aliyun.com/repository/gradle-plugin\'\\r\\n    }\\r\\n    maven {\\r\\n        url \'https://maven.aliyun.com/repository/apache-snapshots\'\\r\\n    }\\r\\n    mavenLocal()\\r\\n    mavenCentral()\\r\\n}\\r\\n```"},{"id":"useage","metadata":{"permalink":"/blog/useage","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-04-16-tools/index.md","source":"@site/blog/2025-04-16-tools/index.md","title":"MD\u4f7f\u7528\u65b9\u6cd5","description":"1.\u6c7d\u8f66","date":"2025-04-16T00:00:00.000Z","tags":[{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Tools","permalink":"/blog/tags/tools","description":"Tools tag description"}],"readingTime":0.525,"hasTruncateMarker":false,"authors":[{"name":"Zhengguang Li","title":"Senior Java Software Engineer","url":"https://github.com/zhengguangli","page":{"permalink":"/blog/authors/zhengguangli"},"socials":{"x":"https://x.com/lizg_volatile","github":"https://github.com/zhengguangli"},"imageURL":"https://pbs.twimg.com/profile_images/1912531007225622530/v2wG_Ro6_400x400.png","key":"zhengguangli"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"useage","title":"MD\u4f7f\u7528\u65b9\u6cd5","authors":["zhengguangli","yangshun"],"tags":["hello","tools"]},"unlisted":false,"prevItem":{"title":"QA \u5e94\u7528\u4f7f\u7528\u4ecb\u7ecd","permalink":"/blog/qa-application-useage"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"1.\u6c7d\u8f66\\r\\n  * \u5b9d\u9a6c\\r\\n  * \u5954\u9a70\\r\\n  * \u5965\u8fea\\r\\n  \\r\\n2.\u7535\u8111\\r\\n  - \u5916\u661f\u4eba\\r\\n  - \u82f9\u679c\u673a\\r\\n  - \u9ed1\u82f9\u679c\\r\\n  \\r\\n---\\r\\n\\r\\nHeading\\r\\n=======\\r\\n\\r\\nSub-heading\\r\\n-----------\\r\\n\\r\\n# Alternative heading\\r\\n\\r\\n## Alternative sub-heading\\r\\n\\r\\nParagraphs are separated \\r\\nby a blank line.\\r\\n\\r\\nTwo spaces at the end of a line  \\r\\nproduce a line break.\\r\\n\\r\\nText attributes _italic_, **bold**, `monospace`.\\r\\n\\r\\nHorizontal rule:\\r\\n\\r\\n---\\r\\n\\r\\nBullet lists nested within numbered list:\\r\\n\\r\\n  1. fruits\\r\\n     * apple\\r\\n     * banana\\r\\n  2. vegetables\\r\\n     - carrot\\r\\n     - broccoli\\r\\n\\r\\nA [link](https://soft-snowflake-7052.whoel.wang).\\r\\n\\r\\n![Image](./logo-hous.jpg \\"icon\\")\\r\\n\\r\\n> Markdown uses email-style\\r\\ncharacters for blockquoting.\\r\\n>\\r\\n> Multiple paragraphs need to be prepended individually.\\r\\n\\r\\nMost inline <abbr title=\\"Hypertext Markup Language\\">HTML</abbr> tags are supported."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.465,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MD\u4f7f\u7528\u65b9\u6cd5","permalink":"/blog/useage"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nHere are a few tips you might find useful.\\n\\n\x3c!-- truncate --\x3e\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.235,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n:::\\n\\n{/* truncate */}\\n\\nFor example, use JSX to create an interactive button:\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","tags":[{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":2.06,"hasTruncateMarker":true,"authors":[{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"yangshun","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!-- truncate --\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet...","date":"2019-05-28T00:00:00.000Z","tags":[{"inline":false,"label":"Hola","permalink":"/blog/tags/hola","description":"Hola tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.135,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":["slorber","yangshun"],"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet...\\n\\n\x3c!-- truncate --\x3e\\n\\n...consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}}')}}]);