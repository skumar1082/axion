This solution does not contain any dependency libraries and not able to execute directly need to follow below instructions carefully and make it run.

I used yarn package manager instead of npm because yarn using cache and faster than npm.

INSTALATION STEPS and TODO's:

1.  `yarn start` command to install all dependency packages and run the application from source file
    (OR)
    `yarn build` command to take a build and copy the build files for server deployments or docker build
2.  For server deployments use `serve` or `PM2` global packages to run the application
3.  The application developed with basic login screen when the application start it takes to login page and use below credentials for login
    - User name: admin@axiongroup.com - Password: admin@axiongroup.com
      for the testing purpose all the credentials are stored in local client side it will be moved to server side (nodejs/C#/java/Python) and should be maintain JWT for subsequent API calls.
4.  The application supports responsive but till it has few UI glitches it needs to be fixed
5.  In the dashboard card view / grid view it's more difficult to read it requires following functionalities
    a) Search/Filter
    b) Pagination
    c) Don't need separate component for card view. The table view itself behave card view but it has some UI related tricks and some JS and not enough time now.
6.  Need to add page transition animations for look and feel
