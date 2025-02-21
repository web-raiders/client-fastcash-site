const List = ({ children }: any) => <ul className="list-disc list-inside mt-2">{children}</ul>;
const ListItem = ({ children }: any) => <li className="mb-2">{children}</li>;

const serializers = {
  list: List,
  listItem: ListItem,
};

export default serializers;