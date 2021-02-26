# Setup

Ensure you have a [Java Rumtime] @ installed.

### Install Dependencies

`yarn`

### Install Firebase CLI (globally)

`npm install -g firebase-tools`

### Login

`firebase login`

### Test connectivity 

`firebase projects:list`

### Initialize

`firebase init`

### Configuration

1. Check the `Firestore` and `Emulators`options

2. Following the step-by-step process, selecting appropriate options (go with defaults)


### Run Emulators 

`firebase emulators:start --only firestore`

[localhost:4000/](http://localhost:4000/]) for emulator overview
[http://localhost:4000/firestore](http://localhost:4000/firestore]) for emulated firestore


### Create User Collection
Create the user collection in the emulated [firestore](http://localhost:4000/firestore])


### Run Tests
`yarn test`