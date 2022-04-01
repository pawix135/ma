import Post, { PostType } from "../Post";
import goblin from "../../assets/goblin.png";
import goblin2 from "../../assets/goblin2.jpg";
import goblin3 from "../../assets/goblin3.jpeg";

let posts: PostType[] = [
  {
    title: "01 / GNOME NOME",
    description:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    secondDescription:
      "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
    link: "#project-one",
    linkText: "More shots from this project ↗",
    image: goblin,
  },
  {
    title: "02 / GREEN GOBLIN",
    description:
      "Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.",
    link: "https://www.youtube.com/watch?v=hq0MR6hz-Jo",
    linkText: "See case study →",
    secondDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consequuntur? Maiores animi saepe voluptatum similique rerum hic dolore esse odio quidem atque, assumenda eius eaque velit adipisci, laboriosam delectus ad?",
    image: goblin2,
  },
  {
    title: "03 / PROJECT NAME",
    description: "Experimental creature modeling for school project.",
    link: "https://sketchfab.com/3d-models/green-goblin-20b998e202874b9fa28ff93a02ca16a9",
    linkText: "Project WIP",
    image: goblin3,
  },
];

const Gallery = () => {
  return (
    <main className="mt-[200px] px-3">
      {posts.map((post, i) => {
        return <Post post={post} key={i} />;
      })}
    </main>
  );
};

export default Gallery;
