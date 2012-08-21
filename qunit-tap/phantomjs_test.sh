#!/bin/sh
URL=file://$PWD/qunit-tap.html
phantomjs qunit-tap/run_qunit.js $URL
