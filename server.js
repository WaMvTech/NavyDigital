


  firestore.collection('Test').get().then( (snapshot) => {
      snapshot.docs.forEach( doc => {
        console.log(doc.data());
      })
})

