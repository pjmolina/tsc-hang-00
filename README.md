# tsc hangs 00

When importing a big commonjs JS file (a parser) the tsc compiler hangs forever.

[![Build Status](https://travis-ci.org/pjmolina/tsc-hang-00.svg?branch=master)](https://travis-ci.org/pjmolina/tsc-hang-00)

## Repro steps

1. `npm install`
2. `tsc`

Compilations do not ends, process continue to consume CPU.

## Test conditions

- node 8.0.0
- typescript 2.4.1
- Windows 10
