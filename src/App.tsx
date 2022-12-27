import Articles from "@/components/sections/Articles";
import Banner from "@/components/sections/Banner";
import Discussions from "@/components/sections/Discussions";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import Reviews from "@/components/sections/Reviews";
import Statistics from "@/components/sections/Statistics";
import Team from "@/components/sections/Team";

const App = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <Discussions />
      <Team />
      <Statistics />
      <Reviews />
      <Articles />
      <Footer />
    </main>
  );
};

export default App;
