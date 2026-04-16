import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Blog from "@/app/components/blogs/Blog";
import Blogtwo from "@/app/components/blogs/Blogtwo";
import Blogthre from "@/app/components/blogs/Blogthre";



export default async function Page({ params }) {
  const { slug } =await params;

  
  let content;

  if (slug === "best-digital-marketing-agency-2026") {
    content = <Blog />;
  } else if (slug === "fast-website-importance") {
    content = <Blogtwo />;
  } else if (slug === "indian-digital-marketing-trust") {
    content = <Blogthre />;
  } else {
    content = <h1>Blog Not Found</h1>;
  }

  return (
    <>
        <Navbar />
           {content}
        <Footer />
      
    </>
  );
}