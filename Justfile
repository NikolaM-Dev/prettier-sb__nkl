# List avalible recipes
default:
    just --list

# Build the prettier binary
build:
    yarn install
    bun run build

# Install into `$HOME/.local/bin` with the `prettier-sb` name
install: build
    ln -sf "$(pwd)/dist/prettier/bin/prettier.cjs" "$HOME/.local/bin/prettier-sb"
