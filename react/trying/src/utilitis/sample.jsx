// after this file is imported it's value will be "data" object.
// it is a mock data which is used as a starting point to create a real data source.
// this data will be stored in db so that each refresh does not clear out the data.

const data = {
  lists: [
    {
      id: "list-1",
      title: "To do",
    },

    {
      id: "list-2",
      title: "In progress",
    },
    {
      id: "list-3",
      title: "Completed",
    },
  ],
  listIds: ["list-1", "list-2", "list-3"],
};

export default data;
