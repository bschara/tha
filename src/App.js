import "./App.css";
import SearchBar from "./components/searchBar";

function App() {
  const articles = [
    {
      title: "Exploring the Wonders of Deep Sea Life",
      author: "Marine Biologist",
      content:
        "Dive into the depths of the ocean as we uncover the mysterious and fascinating world of deep-sea life. From bioluminescent creatures to bizarre adaptations, this article takes you on a journey through the alien landscapes of the ocean floor.",
    },
    {
      title: "The Future of Artificial Intelligence in Healthcare",
      author: "Tech Enthusiast",
      content:
        "Discover how artificial intelligence is revolutionizing the healthcare industry. From predictive analytics to personalized medicine, AI is playing a crucial role in improving patient outcomes and streamlining healthcare processes.",
    },
    {
      title: "Culinary Adventures: A Tour of Global Street Food",
      author: "Foodie Explorer",
      content:
        "Embark on a culinary journey around the world as we explore the vibrant and diverse world of street food. From the spicy delights of Bangkok's night markets to the savory treats of Mexican street vendors, this article is a feast for the senses.",
    },
    {
      title: "Space Travel: The Next Frontier for Humanity",
      author: "Space Enthusiast",
      content:
        "Delve into the possibilities of space travel and colonization. With advancements in technology and renewed interest in space exploration, humanity is on the brink of venturing beyond Earth. Learn about the challenges and exciting prospects of our journey into the cosmos.",
    },
  ];
  return (
    <div className="App">
      <SearchBar articles={articles} />
    </div>
  );
}

export default App;
