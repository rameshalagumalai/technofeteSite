const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");
const { getAuth } = require("firebase-admin/auth");

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const auth = getAuth(app);

async function checkUser(tokenId, userId){
    var correct = false;
    await auth.verifyIdToken(tokenId)
        .then(decodedToken => {
            const uid = decodedToken.uid;
            if(userId === uid){
                correct = true;
            }
        })
        .catch(e => {
            console.log(e.message);
        });
    return correct;
}

module.exports = { checkUser };
