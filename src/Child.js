import InsideChild from "./InsideChild";

const Child = ({ data }) => {
    return (
      <div>
        <p>Child Component</p>
        <p>Data received: {data}</p>
        <InsideChild data={data} />
      </div>
    );
  };

export default Child;