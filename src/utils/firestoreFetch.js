import { getDocs, getDoc, collection, query, where, orderBy, doc } from "firebase/firestore";
import db from './firebaseSet';

export const firestoreCategoryFetch = async (title) => {
  let q;
  title
  ? (q = query(collection(db, "products"), where('category', '==', title)))
  : (q = query(collection(db, "products"), orderBy('title')));
  const querySnapshot = await getDocs(q);
  const dataFirestore = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return dataFirestore;
};

export const firestoreItemFetch = async (id) => {
  const querySnapshot = await getDoc(doc(db, "products", id));
  if(querySnapshot.exists()) {
    return (
      {
        id: id,
        ...querySnapshot.data()
      }
    )
  } else {
    console.log("Ups!");
  }
};