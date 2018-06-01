# Contributing

Thanks for being willing to contribute! ✨

## Project setup

1. Fork and clone the repo
2. `yarn install`
3. Start the server - `cd server` and `yarn start`
4. Go to `web` folder and make a copy of `.env.example` as `.env`. Then run `yarn install`
5. `yarn start` in the `web` folder will start the application.

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/aravindballa/teamup.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `master` branch.
> Whenever you want to update your version of `master`, do a regular `git pull`.
