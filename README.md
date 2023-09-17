# Comparing Bun 1.0 and Node.js Performance

## Setup:

### Install Node.js (version 17+ required)

### Install Bun [(installation guide)](https://bun.sh/docs/installation)

### Install hyperlink [(GitHub Repo)](https://github.com/sharkdp/hyperfine)

### Create a tmp/ folder in the root of the project.
```sh
mkdir tmp
```

## Run the scripts:
### Bun
```sh
bun /path/to/script
```

### Node.js
```sh
node /path/to/script
```

## Run the benchmark with hyperlink:
```sh
hyperlink 'bun /path/to/script' 'node /path/to/script'
```



