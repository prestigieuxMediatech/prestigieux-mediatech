
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Blog from "@/app/components/blogs/Blog";
import Blogtwo from "@/app/components/blogs/Blogtwo";
import Blogthre from "@/app/components/blogs/Blogthre";

export default async function Page({ params }) {

  const { slug } = await params;

  return (
    <>
      <Navbar />

      {slug === "best-digital-marketing-agency-2026" && <Blog />}

      {slug === "fast-website-importance" && <Blogtwo />}

      {slug ==="indian-digital-marketing-trust" && <Blogthre />}

      {!slug && <h1>Blog Not Found</h1>}

      <Footer />
    </>
  );
}
