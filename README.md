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

## Run the benchmark with hyperfine:
```sh
hyperfine 'bun /path/to/script' 'node /path/to/script'
```

```sh
# With --warmup
hyperfine --warmup 5 'bun /path/to/script' 'node /path/to/script'
```



