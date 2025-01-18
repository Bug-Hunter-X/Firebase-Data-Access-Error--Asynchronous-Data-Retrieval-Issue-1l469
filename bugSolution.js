The solution involves using async/await or promises to ensure that the data is fully loaded before accessing its properties.  Here's the corrected version using async/await:

```javascript
async function getData() {
  const snapshot = await db.collection('yourCollection').doc('yourDoc').get();
  if (snapshot.exists()) {
    const data = snapshot.data();
    console.log(data.propertyName); // Access data after it's loaded
  } else {
    console.log('No such document!');
  }
}
```
Alternatively using promises:
```javascript
db.collection('yourCollection').doc('yourDoc').get().then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.data();
    console.log(data.propertyName);
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```
Ensure to handle any errors that occur during the data retrieval process.