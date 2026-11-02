import assert from "node:assert/strict";
import test from "node:test";
import { caseStudies } from "./case-studies.ts";

test("NewAgeIslam is published as completed client work with its live website", () => {
  const project = caseStudies.find((item) => item.slug === "newageislam");

  assert.ok(project);
  assert.equal(project.published, true);
  assert.equal(project.projectKind, "Client engagement");
  assert.equal(project.projectStatus, "Completed");
  assert.equal(project.liveUrl, "https://newageislam.com");
  assert.equal(project.metrics.length, 0);
  assert.equal(project.techStack.length, 0);
  assert.match(project.evidenceNote ?? "", /source project and measurement records are not in this workspace/i);
});

test("Assistra presents a coming-soon RAG project brief without claiming verified deployment", () => {
  const project = caseStudies.find((item) => item.slug === "assistra-knowledge-assistant");

  assert.ok(project);
  assert.equal(project.published, true);
  assert.equal(project.projectKind, "RakriLabs product");
  assert.equal(project.projectStatus, "Coming Soon");
  assert.equal(project.liveUrl, undefined);
  assert.deepEqual(project.architectureFlow?.nodes, [
    "Document upload",
    "Celery processing",
    "Text segments & embeddings",
    "PostgreSQL + pgvector",
    "Context retrieval",
    "GPT-4o mini",
    "Chat response",
  ]);
  assert.match(project.architectureLabel ?? "", /implementation not verified/i);
  assert.match(project.evidenceNote ?? "", /not available in this workspace/i);
  assert.equal(project.metrics.length, 0);
});
