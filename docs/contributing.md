---
title: Contributing Guidelines
description: Contributing Guidelines of the Projects owned by Xenode Studio.
---

# Contributing Guidelines

So you have decided to contribute to projects at **Xenode Studio**. Thank you for your interest in contributing to Xenode:tada: We welcome contributions from the community and appreciate your support in making our game engine better.

The following is a set of guidelines for contributing to the [Xenode Game Engine](https://github.com/XenodeStudio/Xenode) and other projects by [Xenode Studio](https://github.com/orgs/XenodeStudio/repositories).

::: warning
By participating to contribute to our projects, it is expected to uphold the [Code of Conduct](/code_of_conduct.md)
:::

::: tip
We use GitHub to manage our repositories. If you’re not familiar with git/GitHub, we strongly recommend following a tutorial, such as [this one](https://try.github.io).
:::

## Ways to contribute

Whether you are a developer, a designer, a game developer or a just like game engines in general, there are lots of ways to contribute. Here's a few ideas:

- _Try building and running Xenode on your local machine._ Does it work? Does it do what you'd expect? If not, open an [issue](https://github.com/XenodeStudio/Xenode/issues) and let us know.
- _Show some involvement on the project's open issues._ Have you experienced the same problem? Know a work around? Do you have a suggestion for how the feature could be better?
- _Read through the documentation, and ask the community_, any time you see something confusing, or have a suggestion for something that could be improved.
- _Find an open issue_ (especially those labeled **help wanted/good first issue**), _mention yourself in the comment with the interest to work on the issue and submit a proposed fix._ If it’s your first pull request, we promise we won’t bite, and are glad to answer any questions.
- _Help evaluate open pull requests,_ by testing the changes locally and reviewing what’s proposed.
- _Open an issue if you found something that needs a fix_ **(Please don’t forget to mention if you want to work on the issue you opened or have started working for a fix!)**

## Contributing the source code

::: warning
- Before you start working on an issue, kindly ensure that no one else is already working on the issue.
- If nobody is working on that issue, drop a comment to let everyone know that you will be working on the issue.
:::

### Prepare your working tree.

1. [Click here](https://github.com/XenodeStudio/Xenode) to open the source code of Xenode in Github.
2. Fork the project by clicking on "Fork" on the top right corner area.
3. Clone the repository locally
``` shell
git clone --recursive https://github.com/<your-username>/Xenode
```
4. Create a new, descriptively named branch to contain you code changes.
``` shell
git checkout -b my-new-branch-that-does-this
```


### Obtain the source code and build.

[Click here](/building.md) to obtain instructions to build Xenode. 

### Making Code Changes.

Now that you've successfully built Xenode from source, hack your way into the source code. Just make sure to:
- Follow the code style used in the module you are contributing to.
- before committing and pushing the changes, test the code both manually and automatically with the automated test suite if applicable.

### Submitting a Pull Request(PR)

Follow the following to steps to raise a PR:
- Navigate to your fork on GitHub and open the Pull Requests tab.
- Create a new Pull Request.
- Select the **base** and **compare** branches.
- Fill out the PR form.
    - Write a title and description for your pull request. Be clear about what changes you made and why.
- Submit the Pull Request by clicking the "Create Pull Request" button.

## Thank You:heart:

If you follow these guidelines closely your contribution will have a very positive impact on the Xenode Project.

Thanks a lot for your patience.
