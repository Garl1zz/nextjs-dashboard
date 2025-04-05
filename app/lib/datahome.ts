export async function fetchProductsData() {
    return [
      { name: "Juggling balls", image: "/juggling-balls.png" },
      { name: "Shiny Top Hats", image: "/top-hats.png" },
      { name: "Circus Lv 10 Cannon", image: "/cannon.png" },
      { name: "The Holy Unicycle", image: "/unicycle.png" },
    ];
}

export async function fetchTeamData() {
    return [
      {
        name: "Steven Christantio",
        role: "CEO",
        image: "/profile/steven.png",
      },
      {
        name: "Aprillian Josua Marcelino",
        role: "CCO",
        image: "/profile/josua.png",
      },
      {
        name: "Ivan Haryanto",
        role: "COO",
        image: "/profile/ivan.png",
      },
      {
        name: "Arif Ramadinata",
        role: "CIO",
        image: "/profile/arif.png",
      },
    ];
}
