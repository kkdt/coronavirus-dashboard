# properties and environment variables

Custom environment variables can be leverage using the `.env` properties files, with all variables prefixed with `REACT_APP_`.

| File                | Description                                                                     |
| :---                | :---                                                                            |
| .env                | Default                                                                         |
| .env.local          | Local overrides; this file is loaded for all environments except test.          |
| .env.<name>         | Environment-specific settings, i.e. ``.env.development`                         |
| .env.<name>.local   | Local overrides of environment-specific settings i.e. `.env.development.local`  |

> All '.local' will be gitignored.

# References

1. https://create-react-app.dev/docs/adding-custom-environment-variables/

2. https://medium.com/better-programming/using-environment-variables-in-reactjs-9ad9c5322408
