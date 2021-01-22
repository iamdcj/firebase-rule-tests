const firebase = require("@firebase/testing");

const auth = {
  uid: "dcj123",
  email: "david@dcj.codes",
  role: "user",
};

const authAdmin = {
  uid: "dcj",
  role: "administrator",
  isAdmin: true
};

const getFireStore = (auth) => {
  return firebase
    .initializeTestApp({
      projectId: "rules-testing-c2923",
      auth,
    })
    .firestore();
};

describe("beeyonder app", () => {

  it("allows writes if current user", async () => {
    const db = getFireStore(auth);

    const doc = db.collection("users").doc("dcj123");

    await firebase.assertSucceeds(
      doc.update({
        ham: "eggs",
      })
    );
  });

  it("doesn't allows writes if not current user", async () => {
    const db = getFireStore(auth);

    const doc = db.collection("users").doc("dcj12");

    await firebase.assertFails(
      doc.update({
        foo: "bar",
      })
    );
  });

  it("doesn't allow setting role to administator", async () => {
    const db = getFireStore(auth);

    const doc = db.collection("users").doc("dcj123");

    await firebase.assertFails(
      doc.update({
        role: "administrator",
      })
    );
  });

  it("allows writes if admin user", async () => {
    const db = getFireStore(authAdmin);

    const doc = db.collection("users").doc("dcj123");

    await firebase.assertSucceeds(
      doc.update({
        name: "Jones",
      })
    );
  });

});


