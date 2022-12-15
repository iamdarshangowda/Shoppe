import { db } from "../pages/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const CreateUserDocument = async (user: any) => {
  if (!user) return;

  const userRef = doc(db, `users`, user.uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { email } = user;

    try {
      setDoc(userRef, {
        email: email,
        createdAt: new Date(),
        address: {
          name: "",
          phone: "",
          pincode: "",
          city: "",
          street: "",
          landmark: "",
        },
        cart: [],
        orders: [],
      });
    } catch (error: any) {
      console.log(error);
    }
  }
};

export const GetUserDocument = async (userData: any) => {
  const userRef = doc(db, `users`, userData.uid);
  const currentData = await getDoc(userRef);
  return currentData.data();
};

export const UpdateUserDocument = async (userData: any, uid: string) => {
  const userRef = doc(db, `users`, uid);
  await updateDoc(userRef, userData);
};

export const UpdateUserAddress = async (addressData: any, uid: string) => {
  const userRef = doc(db, `users`, uid);
  await updateDoc(userRef, { address: addressData });
};

export const UpdateUserCart = async (cartData: any, uid: string) => {
  const userRef = doc(db, `users`, uid);
  await updateDoc(userRef, { cart: cartData });
};
