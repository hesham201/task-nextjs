import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function GET(req, { params }) {
  //   const { id } = req.query;
  console.log(params);
  try {
    const docRef = doc(db, "blogs", params.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return Response.json({ message: "No such document!" });
    }

    return Response.json({ id: docSnap.id, ...docSnap.data() });
  } catch (err) {
    return Response.json({ message: "Error fetching document" });
  }
}
