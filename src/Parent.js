import Child from "./Child";

const Parent = ({ data }) => {
    return (
      <div>
        <p>Parent Component</p>
        <p>Data received: {data}</p>
        <Child data={data} />
      </div>
    );
  };

  export default Parent;