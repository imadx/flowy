import { useState } from "react";
import { DiagramNode } from "./node";

export const Stage = () => {
  const [state, setState] = useState({
    nodes: [
      {
        id: "1",
        type: "start" as const,
        position: { x: 100, y: 100, width: 100, height: 100 },
        data: { label: "Start" },
      },
      {
        id: "2",
        type: "end" as const,
        position: { x: 300, y: 100, width: 100, height: 100 },
        data: { label: "End" },
      },
    ],
    links: [
      {
        id: "1",
        source: "1",
        target: "2",
        label: "Link",
      },
    ],
  });

  const handleOnClick = () => {
    setState((prevState) => {
      return {
        ...prevState,
        nodes: [
          ...prevState.nodes,
          {
            id: `${prevState.nodes.length + 1}`,
            type: "start",
            position: {
              x: prevState.nodes.length * 100 + 100,
              y: prevState.nodes.length * 100 + 100,
              width: 80,
              height: 80,
            },
            data: { label: "Start" },
          },
        ],
      };
    });
  };

  return (
    <svg
      overflow="visible"
      width={state.nodes.length * 100}
      height={state.nodes.length * 100}
    >
      {state.nodes.map((node) => (
        <DiagramNode key={node.id} node={node} onClick={handleOnClick} />
      ))}
    </svg>
  );
};
