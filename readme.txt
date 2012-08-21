- セットアップ方法（Mac） -
-- 参考: -- http://tech-gym.com/2011/11/javascript/572.html

1. phantom.jsのインストール
- 以下のzipから。portは古いので注意。
-- http://code.google.com/p/phantomjs/downloads/list
- phantomjsのディレクトリを配置してパスを通す
-- 例: PATH="$PATH:/Applications/phantomjs-1.6.1.app/bin"

2. qunit-tap 入れる。
- % npm install qunit-tap

- 実行方法 -

1. テストコードをQUnitで書く
2. テストコードのファイル名をrequireとして、qunit-tap.htmlに追記する
3. コンソールからqunit-tap/phantomjs_test.shを叩く
3.1. Jenkinsの場合は以下のようにする（未検証）
- % prove --harness TAP::Harness::JUnit ./phantomjs_test.sh
-- 参考: http://dann.g.hatena.ne.jp/dann/20110327

- phantomjs_test.shでエラーになる場合は
-- node_modules/qunit-tap/sample/js/
- から phantomjs_test.sh と run_qunit.js
-- node_modules/qunit-tap/lib/
- から qunit-tap.js を qunit-tapディレクトリにコピーする
