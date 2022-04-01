import Post, { PostType } from "../Post";

let posts: PostType[] = [
  {
    title: "01 / PROJECT NAME",
    description:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    secondDescription:
      "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
    link: "#project-one",
    linkText: "More shots from this project ↗",
    image: "",
  },
  {
    title: "02 / PROJECT NAME",
    description:
      "Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.",
    link: "#project-two",
    linkText: "See case study →",
    image: "",
  },
  {
    title: "03 / PROJECT NAME",
    description: "Experimental creature modeling for school project.",
    link: "#project-three",
    linkText: "Project WIP",
    image: "",
  },
];

const Gallery = () => {
  return (
    <main className="mt-[150px] px-3">
      {posts.map((post, i) => {
        return <Post post={post} key={i} />;
      })}
    </main>
  );
};

export default Gallery;
