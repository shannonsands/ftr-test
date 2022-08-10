### Created by Shannon Sands

### To get started with Part 1 (the example application)...

* Clone the repository using the command line or git client of choice (`git clone https://github.com`):
* Enter the directory cloned (`cd ftr-test`)
* Run the install command (`npm i`);
* And launch the CLI (`npm start`)

### Answers for Part 2
**Updating the UI**

Creating an Angular app was chosen to most closely reflect the behaviour described in the requirements (and the examples given), but could easily form the foundation for a range of different interfaces, such as a RESTful API used by a client application, or a library used by a single page application running purely in the browser. Architecturally, it's just a very simple MVC-style application, so decoupling the view entirely from the controller would be extremely simple & shouldn't really require any changes.

For example, to turn this application into an API backend using Express (deployable on VPS, Docker instance or similar) we could perform the following steps:
1. Fork or branch the existing repository on a dev system.
1. Install Express ( and some typical accompanying modules for enabling websockets, reading configs etc).
2. Add a new entrypoint that sets up a simple Express application.
3. Create a new class to handle route listeners, creating the FtrTest controller instance and mapping routes & HTTP verbs to the various methods in the controller as appropriate.
4. Add a websocket handler, for sending regular messages to the browser from the timer.
5. Create a frontend UI that makes AJAX calls to test the functionality (or spend the time to create a set of endpoint tests in Postman)

**Making it Production Ready**

Getting the app to the point of being production testing should first involve some form of automated testing (preferably both unit tests & e2e tests as needed), a way of performing CI/CD, automated builds & deployments and some form of monitoring. Linting checks can also be important in ensuring that the codebase remains clean & standards are enforced. A file watcher to automatically reload the application can also be useful to developers & accelerate dev time. Preferably, these steps would be at least partially performed prior to beginning a project.

These would be the bare minimum set of features I'd expect in any kind of production project, and don't include more specific means of polishing up projects such as delivering formal OpenAPI specs for RESTful endpoints, Automated browser tests for single page applications, simulater tests for mobile applications and so on. Also, while these changes are mostly to the development toolchain, obviously a comprehencive QA & UAT process should also be followed.

Assuming the above example of a CLI application the steps would include:
1. Ensure developers are using a modern editor, such as VS Code, configured to run an automated linting tool such as Prettier, to enforce project code standards (in addition to the regular automated test-on-save features modern editors typically offer). Such standards can generally be included in a configuration file (such as tsconfig.json for the Typescript project above) & included in the project repository.
2. Install a testing framework (eg Mocha & Chai) to the local project & writing comprehensive tests, to an acceptable level of coverage.
3. Add git hooks to enforce running all tests & linting steps prior to pushing commits.
4. In the VCS (configured as required) ensure that pipelines are set up to ALSO run tests in the pipeline environment & that merges are only possible AFTER all tests are passed.
5. Depending on your Git workflow, builds & deployments to various environments should also be automated (and adjusted as needed between development, staging, production etc)

**Impressions of the coding test**

It was actually quite an interesting test for something so short! It appeared short & simple at first glance, but there's a few potential gotchas in there (such as various ways of blocking the event loop when automatically printing the frequency table if this was completed on the backend, while continuing to accept input) & little bits of detail (such as reverse ordering the frequency table prints) that could be easy to overlook. The generation of the Fibonacci series is always a classic exercise of course, so it was interesting to do that again. I don't have much to suggest there - it's a good way to combine a simple set of problems with a small application to assess applicants.

