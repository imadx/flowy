import { FC } from "react";

interface Props {
  node: {
    id: string;
    type: "start" | "process" | "end";
    position: { x: number; y: number; width: number; height: number };
    data: { label: string };
  };
  onClick: () => void;
}

export const StartNode: FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
}> = ({ x, y, width, height, fill }) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke="black"
    />
  );
};

export const ProcessNode: FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
}> = ({ x, y, width, height, fill }) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke="black"
    />
  );
};

export const EndNode: FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
}> = ({ x, y, width, height, fill }) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke="black"
    />
  );
};

export const DiagramNode: FC<Props> = ({ node, onClick }) => {
  const { type, position, data } = node;
  const { label } = data;

  return (
    <g onClick={onClick}>
      {type === "start" && (
        <StartNode
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          fill="green"
        />
      )}
      {type === "process" && (
        <ProcessNode
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          fill="blue"
        />
      )}
      {type === "end" && (
        <EndNode
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          fill="red"
        />
      )}
      <text
        x={position.x + position.width / 2}
        y={position.y + 20}
        fill="white"
      >
        {label}
      </text>
    </g>
  );
};
