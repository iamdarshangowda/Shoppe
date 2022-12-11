import { db } from "../pages/firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const productCollectionRef = collection(db, "products");
class ProductDataServices {
  getProducts = (collectionName: string) => {
    return getDocs(collection(db, collectionName));
  };

  getSingleProduct = (id: any) => {
    const productDoc = doc(db, "products", id);
    return getDoc(productDoc);
  };
}

export default new ProductDataServices();
