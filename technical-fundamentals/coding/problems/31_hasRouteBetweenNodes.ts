// 1. Route Between Nodes*:

// Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes.

import { Tree } from "./30_trees";
export type GraphNode = {
  value: number;
  neighbors: GraphNode[];
};

export default function hasRouteBetweenNodes(
  start: GraphNode,
  end: GraphNode
): boolean {
  const set: Set<GraphNode> = new Set();

  return dfs(start, end, set);
}

function dfs(start: GraphNode, end: GraphNode, set: Set<GraphNode>): boolean {
  if (start === end) return true;

  if (set.has(start)) return false;

  set.add(start);

  for (let i = 0; i < start.neighbors.length; i++) {
    const curr = start.neighbors[i];

    if (dfs(curr, end, set)) {
      return true;
    }
  }

  return false;
}
