export function App() {
  const ideas = [
    { nike: "idea-nike-1", title: "idea 1 title", description: "idea 1 desc" },
    { nike: "idea-nike-2", title: "idea 2 title", description: "idea 2 desc" },
    { nike: "idea-nike-3", title: "idea 3 title", description: "idea 3 desc" },
  ];

  return (
    <div>
      <h1 className="my_class">idea story</h1>
      <div>
        {ideas.map((e) => {
          return (
            <div>
              <h2>{e.title}</h2>
              <p>{e.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
