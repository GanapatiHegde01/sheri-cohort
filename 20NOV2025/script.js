const users = [
  {
    username: "arun_dev",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    profession: "Frontend Developer",
    description:
      "Passionate about crafting clean UI and smooth user experiences.",
    tags: ["JavaScript", "React", "UI", "Web Design"],
  },
  {
    username: "megha_writes",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    profession: "Content Writer",
    description:
      "Writes engaging articles focusing on lifestyle, productivity, and storytelling.",
    tags: ["Writing", "Blogging", "Creativity", "SEO"],
  },
  {
    username: "rahul_codes",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Full Stack Engineer",
    description:
      "Builds scalable backend systems and modern full stack applications.",
    tags: ["Node.js", "MongoDB", "APIs", "Cloud"],
  },
  {
    username: "sneha_design",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    profession: "UI/UX Designer",
    description:
      "Designs intuitive digital experiences with clean and modern aesthetics.",
    tags: ["Figma", "UX Research", "Prototyping", "Design"],
  },
  {
    username: "vivek_shoots",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Photographer",
    description:
      "Captures moments through portraits, events, and natural light photography.",
    tags: ["Portraits", "Editing", "Photography", "Lightroom"],
  },
];

let elem = "";

users.forEach((user) => {
  elem =
    elem +
    ` <div class="card">
        <img
          src=${user.image}
          alt=""
        />
        <h3>${user.username}</h3>
        <h4>${user.profession}</h4>

        <p>
         ${user.description}
        </p>
      </div>`;
});

const main = document.querySelector("main");
main.innerHTML = elem;
