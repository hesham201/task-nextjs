"use server";
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
export async function GET(req) {
  // console.log(req.nextUrl);
  let blogs;
  try {
    let querySnapshot = await getDocs(collection(db, "blogs"));
    // blogs = querySnapshot;
    console.log(blogs);
    blogs = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    // console.log(querySnapshot);
    if (blogs === null || blogs === undefined) {
      return Response.json({ message: "Error fetching data" });
    }
    return Response.json(blogs);
  } catch (err) {
    return Response.json({ message: "Error fetching data" });
  }
}
export async function POST(req, res) {
  const data = await req.json();
  console.log(data);
  // Add a new document with a generated id.
  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      title: data.title,
      content: data.content,
    });
    if (!docRef) {
      // res.redirect("/blogs");
      return Response.status(500).json({ message: "Not created Post" });
    }
    // res.redirect("/blogs");
    return Response.json({ message: "Created Post" });
  } catch (err) {
    res.redirect("/blogs");
    return Response.status(500).json({ message: "Not created Post" });
  }
}
