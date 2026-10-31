import assert from "node:assert/strict";
import test from "node:test";
import { engineeringExplorations } from "./engineering-explorations.ts";

test("engineering explorer provides four distinct, complete goal journeys", () => {
  assert.equal(engineeringExplorations.length, 4);
  assert.equal(new Set(engineeringExplorations.map((journey) => journey.id)).size, 4);

  for (const journey of engineeringExplorations) {
    assert.ok(journey.label.length > 0);
    assert.ok(journey.businessProblem.length > 0);
    assert.ok(journey.approach.length > 0);
    assert.ok(journey.architecture.nodes.length >= 4);
    assert.ok(journey.tradeoffs.length >= 1 && journey.tradeoffs.length <= 2);
    assert.equal(journey.risksSafeguards.length, 2);
    assert.ok(journey.deliveryStages.length >= 3);
    assert.ok(journey.links.length >= 1);

    for (const link of journey.links) {
      assert.ok(link.href.startsWith("/"), `${journey.id} link must stay on this site`);
    }
  }
});

test("engineering journeys keep their required illustrative architecture sequences", () => {
  const journeysById = new Map(engineeringExplorations.map((journey) => [journey.id, journey]));
  assert.deepEqual(journeysById.get("new-product")?.architecture.nodes, [
    "User Interface", "Application API", "AI Orchestration", "Model / Tools", "Validated Response",
  ]);
  assert.deepEqual(journeysById.get("workflow-automation")?.architecture.nodes, [
    "Trigger", "Context Retrieval", "Rules / AI Decision", "Approval Gate", "Action", "Audit Log",
  ]);
  assert.deepEqual(journeysById.get("knowledge-search")?.architecture.nodes, [
    "Documents / Sources", "Ingestion", "Chunking & Indexing", "Retrieval", "Grounded Answer + Sources",
  ]);
  assert.deepEqual(journeysById.get("product-performance")?.architecture.nodes, [
    "Baseline Measurement", "Profiling", "Bottleneck Identification", "Targeted Optimization", "Load Testing", "Monitoring",
  ]);
  assert.ok(journeysById.get("knowledge-search")?.architecture.crossCutting?.includes("Access control"));
});
