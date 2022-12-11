import { db } from "../pages/firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  where,
  query,
} from "firebase/firestore";

const productCollectionRef = collection(db, "products");
class ProductDataServices {
  getProducts = (collectionName: string, getQuery?: any) => {
    if (getQuery?.type) {
      const q = query(
        collection(db, collectionName),
        where(getQuery?.type, "==", getQuery?.key)
      );
      return getDocs(q);
    } else {
      return getDocs(collection(db, collectionName));
    }
  };

  getSingleProduct = (collection: any, id: any) => {
    const productDoc = doc(db, collection, id);
    return getDoc(productDoc);
  };
}

export default new ProductDataServices();
