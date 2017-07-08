# tsc hangs 00

When importing a big commonjs JS file (a parser) the tsc compiler hangs forever.

## Repro steps

1. `npm install`
2. `tsc`

Compilations do not ends, process continue to consume CPU.

## Test conditions

- typescript 2.4.1
- Windows 10
