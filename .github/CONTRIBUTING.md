# CONTRIBUTING

Always welcome.

## Environment

[mise](https://mise.jdx.dev/) is recommended.

```shell
mise install # Load .config/mise.toml and install tools

yarn install # Install dependencies

yarn dlx @yarnpkg/sdks vscode # If you develop with VScode
```

## Branch rule

`main` branch can only be pushed from Pull Requests.

## CI/CD

| Task           | When          | Action                                                                                      | On local       |
|----------------|---------------|---------------------------------------------------------------------------------------------|----------------|
| ESLint         | PR is opened  | Block merge until errors are resolved                                                       | `yarn lint`    |
| Prettier       | PR is merged  | Format files and push them on `HEAD`                                                        | `yarn format`  |
